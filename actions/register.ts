'use server';
import bcrypt from 'bcrypt';
import { User, UserSchema } from '@/models';
import {
  connectDBAction,
  errorResponseAction,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

export const register = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const body = Object.fromEntries(formData);

    const parsedData = UserSchema.parse(body);

    const collection = getCollectionDb<User>('users');

    if (!collection) return errorResponseAction('Internal server error');

    const user = await collection.findOne<User>({
      email: parsedData.email,
    });

    if (user) return errorResponseAction('Email already in use');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(parsedData.password, salt);

    await collection.insertOne({ ...parsedData, password: hash });

    return successResponseAction('Register successful');
  }
);
