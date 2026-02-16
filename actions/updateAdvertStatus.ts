'use server';
import { Advert } from '@/models';
import { auth } from '@/auth';
import { connectDBAction, DataDB, getCollectionDb } from '@/lib';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { ObjectId } from 'mongodb';
import { revalidateTag } from 'next/cache';

export const updateAdvertStatus = connectDBAction(async (prevState: unknown, formData: FormData) => {
  const session = await auth();
  const data = Object.fromEntries(formData);
  const advertId = data.advertId as string;

  if (!advertId || !session) return errorResponseAction('Unauthorized');

  const ctx = { advertId, userId: session.user.id };

  const advertsCol = getCollectionDb<DataDB<Omit<Advert, 'views'>>>('adverts');

  if (!advertsCol) return errorResponseAction('Internal server error');

  await advertsCol.updateOne(
    { _id: new ObjectId(ctx.advertId), userId: ctx.userId },
    { $set: { updatedAt: new Date() } },
  );

  revalidateTag('userAdverts', 'max');
  return successResponseAction('Advert activated successfully');
});
