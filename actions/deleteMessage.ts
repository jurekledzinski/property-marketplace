'use server';
import { auth } from '@/auth';
import { connectDBAction, DataDB, getCollectionDb } from '@/lib';
import { deleteUserMessage } from '@/services';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { Message } from '@/models';
import { revalidateTag } from 'next/cache';

export const deleteMessage = connectDBAction(async (prevState: unknown, formData: FormData) => {
  const session = await auth();
  const messagesIds = JSON.parse(formData.getAll('deleteIds').toString());

  if (!session) return errorResponseAction('Unauthorized');

  const ctx = { messagesIds, userId: session.user.id };

  const messagesCol = getCollectionDb<DataDB<Message>>('messages');

  if (!messagesCol) return errorResponseAction('Internal server error');

  const result = await deleteUserMessage(ctx, messagesCol);

  if (!result) {
    return errorResponseAction('Delete failed: No document found');
  }

  revalidateTag('messages', 'max');
  return successResponseAction('Account delete successful');
});
