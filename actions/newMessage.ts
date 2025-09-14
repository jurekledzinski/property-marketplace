'use server';
import { Message, MessageSchema } from '@/models';

import {
  connectDBAction,
  errorResponseAction,
  formatDataNewMessage,
  getCollectionDb,
  successResponseAction,
} from '@/lib';

export const newMessage = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const formattedData = formatDataNewMessage(formData);

    const parsedData = MessageSchema.parse(formattedData);

    const messagesCol = getCollectionDb<Message>('messages');

    if (!messagesCol) return errorResponseAction('Internal server error');

    await messagesCol.insertOne(parsedData);

    return successResponseAction('Account delete successful');
  }
);
