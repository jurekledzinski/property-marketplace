'use server';
import { actionTryCatch, successResponseAction } from '@/lib';
import { signIn } from '@/auth';
import { UserSchema } from '@/models';

export const login = actionTryCatch(
  async (prevState: unknown, formData: FormData) => {
    const body = Object.fromEntries(formData);

    const parsedData = UserSchema.omit({ name: true }).parse(body);

    await signIn('credentials', {
      email: parsedData.email,
      password: parsedData.password,
      redirect: false,
    });

    return successResponseAction('Login success');
  }
);
