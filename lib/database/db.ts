import 'server-only';
import { ActionState } from '@/services';
import { AppRouteHandlerFn } from 'next/dist/server/route-modules/app-route/module';
import { AuthError } from 'next-auth';
import { authMessage, errorResponseApi } from '@/utils-server';
import { GobalMongoDB } from './types';
import { MongoClient } from 'mongodb';
import { z } from 'zod';

import type { NextRequest, NextResponse } from 'next/server';

if (!process.env.ATLAS_URL) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const url = process.env.ATLAS_URL;

let client: MongoClient;

if (process.env.NODE_ENV === 'development') {
  const globalWithMongo = global as GobalMongoDB;

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(url);
  }

  client = globalWithMongo._mongoClient;
} else {
  client = new MongoClient(url);
}

const db = client.db(process.env.DB_NAME);

const connectDB = (fn: (req: NextRequest, res: NextResponse) => Promise<unknown> | Promise<void>) => {
  return async (req: NextRequest, res: NextResponse) => {
    try {
      await client.connect();
      return await fn(req, res);
    } catch {
      return errorResponseApi({
        message: 'Something went wrong, please try later',
        status: 500,
      });
    }
  };
};

const connectDBAuth = (
  fn: (req: NextRequest, ctx: { params: Promise<unknown> }) => ReturnType<AppRouteHandlerFn>
) => {
  return async (req: NextRequest, ctx: { params: Promise<unknown> }) => {
    try {
      await client.connect();
      return await fn(req, ctx);
    } catch (error) {
      return error;
    }
  };
};

const connectDBAction = <T extends object>(
  fn: (prevState: unknown, formData: FormData) => Promise<ActionState<T>>
) => {
  return async (prevState: unknown, formData: FormData): Promise<ActionState<T>> => {
    try {
      await client.connect();
      return await fn(prevState, formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          message: z.prettifyError(error) || 'Incorrect type data',
          success: false,
        };
      } else if (error instanceof AuthError) {
        return { message: authMessage(error.type), success: false };
      } else {
        const err = error as Error;

        if (err.name === 'JWTExpired') {
          return { message: authMessage(err.name), success: false };
        }

        return { message: err.message, success: false };
      }
    }
  };
};

const getCollectionDb = <T extends object>(name: string) => {
  return db && db.collection<T>(name);
};

export { connectDB, connectDBAuth, db, getCollectionDb, connectDBAction };
