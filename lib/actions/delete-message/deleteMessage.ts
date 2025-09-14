import 'server-only';
import { Message } from '@/models';
import { Collection, ObjectId } from 'mongodb';
import { DataDB } from '@/lib';
import { DeleteMessageContext } from './types';

export const deleteUserMessage = async (
  ctx: DeleteMessageContext,
  col: Collection<DataDB<Message>>
) => {
  const result = await col.deleteOne({
    _id: new ObjectId(ctx.messageId),
    userId: ctx.userId,
  });

  return result.deletedCount === 1;
};
