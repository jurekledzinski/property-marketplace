import 'server-only';
import type { NextRequest } from 'next/server';

export const getQuery = <T>(req: NextRequest, key: string) => {
  return req.nextUrl.searchParams.get(key) as T;
};

export const getQueries = <T extends object>(req: NextRequest) => {
  return Object.fromEntries(req.nextUrl.searchParams.entries()) as T;
};
