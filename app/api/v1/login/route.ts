import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models';

import {
  getCollectionDb,
  connectDB,
  comparePasswords,
  errorResponseApi,
  DataDB,
} from '@/lib';

export const POST = connectDB(async (req: NextRequest) => {
  const body = (await req.json()) as Omit<User, 'name'>;

  const collection = getCollectionDb<User>('users');

  if (!collection) return errorResponseApi(500);

  const user = await collection.findOne<DataDB<User>>({
    email: body.email,
  });

  if (!user) return errorResponseApi(409, 'User not exist');

  const isMatch = await comparePasswords(body.password, user.password);

  if (!isMatch) return errorResponseApi(409, 'Incorrect credentials');

  const response = NextResponse.json({
    success: true,
    payload: { name: user.name, email: user.email, id: user._id },
  });

  return response;
});
