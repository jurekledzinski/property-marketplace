// --- GET ---

import { DataDB } from '@/lib/database';
import { User } from '@/models';
import { Collection } from 'mongodb';
import { GETUserProfileContext } from './types';

export const getUserProfile = async (
  ctx: GETUserProfileContext,
  coll: Collection<DataDB<User>>
) => {
  const { userId } = ctx;

  const userAdverts = await coll.findOne<DataDB<User>>(
    { userId },
    { projection: { password: 0 } }
  );

  return userAdverts;
};
