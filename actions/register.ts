'use server';
import bcrypt from 'bcrypt';
import { connectDBAction, getCollectionDb } from '@/lib';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { User, UserSchema } from '@/models';

export const register = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const body = Object.fromEntries(formData);

    const parsedData = UserSchema.parse(body);

    const usersCol = getCollectionDb<User>('users');

    if (!usersCol) return errorResponseAction('Internal server error');

    const user = await usersCol.findOne<User>({ email: parsedData.email });

    if (user) return errorResponseAction('Email already in use');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(parsedData.password, salt);

    await usersCol.insertOne({ ...parsedData, password: hash });

    return successResponseAction('Register successful');
  }
);
