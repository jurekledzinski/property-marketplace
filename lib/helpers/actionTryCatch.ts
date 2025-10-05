import { AuthError } from 'next-auth';
import { authMessage } from './authMessage';
import { ActionState } from '@/services';
import { z } from 'zod';

export const actionTryCatch = <T extends object = object>(
  fn: (prevState: unknown, formData: FormData) => Promise<ActionState<T>>
) => {
  return async (prevState: unknown, formData: FormData) => {
    try {
      return await fn(prevState, formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          message: z.prettifyError(error),
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
