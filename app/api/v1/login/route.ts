import 'server-only';
import { NextRequest } from 'next/server';
import { User } from '@/models';

import {
  getCollectionDb,
  connectDB,
  comparePasswords,
  errorResponseApi,
  successResponseApi,
  DataDB,
  getBodyRequest,
} from '@/lib';

export const POST = connectDB(async (req: NextRequest) => {
  const body = await getBodyRequest<Omit<User, 'name'>>(req);

  const collection = getCollectionDb<User>('users');

  if (!collection) return errorResponseApi({ status: 500 });

  const user = await collection.findOne<DataDB<User>>({
    email: body.email,
  });

  if (!user) {
    return errorResponseApi({ message: 'User not exist', status: 409 });
  }

  const isMatch = await comparePasswords(body.password, user.password);

  if (!isMatch) {
    return errorResponseApi({ message: 'Incorrect credentials', status: 409 });
  }

  return successResponseApi({
    payload: { name: user.name, email: user.email, id: user._id },
    success: true,
  });
});
