import 'server-only';
import { Message } from '@/models';
import { Collection, ObjectId } from 'mongodb';
import { DataDB } from '@/lib';
import { DeleteMessageContext } from './types';

export const deleteUserMessage = async (
  ctx: DeleteMessageContext,
  col: Collection<DataDB<Message>>
) => {
  const objectIds = ctx.messagesIds.map((id) => new ObjectId(id));

  const result = await col.deleteMany({
    _id: { $in: objectIds },
    userId: ctx.userId,
  });

  return result.deletedCount > 0;
};
