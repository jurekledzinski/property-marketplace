import 'server-only';
import { Collection } from 'mongodb';
import { DataDB } from '@/lib';
import { GetUserMessageContext } from './types';
import { Message } from '@/models';

// --- GET ---

export const getUserMessages = async (
  ctx: GetUserMessageContext,
  col: Collection<DataDB<Message>>
) => {
  const userMessages = await col
    .find<DataDB<Message>>({
      userId: ctx.userId,
    })
    .toArray();

  return userMessages;
};
