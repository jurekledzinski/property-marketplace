'use server';
import { auth } from '@/auth';
import { connectDBAction, DataDB, getCollectionDb } from '@/lib';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { ObjectId } from 'mongodb';
import { revalidateTag } from 'next/cache';
import { User, UserSchema } from '@/models';

export const updateProfile = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const data = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    const ctx = { userId: session.user.id };

    const parsedData = UserSchema.omit({ password: true }).parse(data);

    const usersCol = getCollectionDb<DataDB<User>>('users');

    if (!usersCol) return errorResponseAction('Internal server error');

    const currentUser = await usersCol.findOne<User>({
      _id: new ObjectId(ctx.userId),
    });

    if (!currentUser) return errorResponseAction('Unauthorized');

    const currentEmail = currentUser.email;

    const user = await usersCol.findOne<User>({
      $and: [{ email: parsedData.email }, { email: { $ne: currentEmail } }],
    });

    if (user) return errorResponseAction('Email already in use');

    await usersCol.findOneAndUpdate(
      { _id: new ObjectId(ctx.userId) },
      { $set: { ...parsedData } }
    );

    revalidateTag('user');
    return successResponseAction('Update user profile successful');
  }
);
