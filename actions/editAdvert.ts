'use server';
import { connectDBAction, errorResponseAction, getCollectionDb } from '@/lib';

export const editAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    return { message: 'Edit advert successful', success: true };
  }
);
