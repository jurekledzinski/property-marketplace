'use server';
import { AuthError } from 'next-auth';
import { authMessage } from './authMessage';
import { State } from '../database';
import { z } from 'zod';

export const actionTryCatch = <T extends object = object>(
  fn: (prevState: unknown, formData: FormData) => Promise<State<T>>
) => {
  return async (prevState: unknown, formData: FormData) => {
    try {
      return await fn(prevState, formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          message: error.message,
          success: false,
        };
      } else if (error instanceof AuthError) {
        return { message: authMessage(error.type), success: false };
      } else {
        return { message: 'Unexpected error', success: false };
      }
    }
  };
};
