import 'server-only';
import { Collection, ObjectId } from 'mongodb';
import { DataDB } from '@/lib';
import { GetUserProfileContext } from './types';
import { User } from '@/models';

// --- GET ---

export const getUserProfile = async (
  ctx: GetUserProfileContext,
  col: Collection<DataDB<User>>
) => {
  const user = await col.findOne<DataDB<User>>(
    { _id: new ObjectId(ctx.userId) },
    { projection: { password: 0 } }
  );

  return user;
};
