'use server';
import { auth } from '@/auth';
import { Message } from '@/models';

import {
  connectDBAction,
  DataDB,
  errorResponseAction,
  getCollectionDb,
  successResponseAction,
  deleteUserMessage,
} from '@/lib';

export const deleteMessage = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const { messageId } = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    const ctx = { messageId: messageId.toString(), userId: session.user.id };

    const messagesCol = getCollectionDb<DataDB<Message>>('messages');

    if (!messagesCol) return errorResponseAction('Internal server error');

    const result = await deleteUserMessage(ctx, messagesCol);

    if (!result) {
      return errorResponseAction('Delete failed: No document found');
    }

    return successResponseAction('Account delete successful');
  }
);
