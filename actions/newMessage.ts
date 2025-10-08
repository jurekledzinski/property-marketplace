'use server';
import { connectDBAction, getCollectionDb } from '@/lib';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { formatDataNewMessage } from '@/services';
import { Message, MessageSchema } from '@/models';
import { revalidateTag } from 'next/cache';

export const newMessage = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const formattedData = formatDataNewMessage(formData);

    const parsedData = MessageSchema.parse(formattedData);

    const messagesCol = getCollectionDb<Message>('messages');

    if (!messagesCol) return errorResponseAction('Internal server error');

    await messagesCol.insertOne(parsedData);

    revalidateTag('messages');
    return successResponseAction('Message sent successfully');
  }
);
