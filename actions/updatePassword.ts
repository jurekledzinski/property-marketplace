'use server';
import bcrypt from 'bcrypt';
import { auth } from '@/auth';
import { ObjectId } from 'mongodb';
import { User, UserSchema } from '@/models';

import {
  connectDBAction,
  DataDB,
  errorResponseAction,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

export const updatePassword = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    const ctx = { userId: session.user.id };

    const parsedData = UserSchema.omit({ email: true, name: true }).parse(data);

    const usersCol = getCollectionDb<DataDB<User>>('users');

    if (!usersCol) return errorResponseAction('Internal server error');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(parsedData.password, salt);

    await usersCol.findOneAndUpdate(
      { _id: new ObjectId(ctx.userId) },
      { $set: { password: hash } }
    );

    return successResponseAction('Update user password successful');
  }
);
