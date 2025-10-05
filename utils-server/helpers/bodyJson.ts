import 'server-only';

import type { NextRequest } from 'next/server';

export const getBodyRequest = async <T extends object>(req: NextRequest) => {
  return (await req.json()) as T;
};
