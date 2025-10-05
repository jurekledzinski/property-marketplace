import 'server-only';
import { Advert } from '@/models';
import { Collection } from 'mongodb';
import { DataDB } from '@/lib';
import { GetUserAdvertsContext } from './types';
import { UserAdvertsTable } from '@/services';

// --- GET ---

export const getUserAdverts = async (
  ctx: GetUserAdvertsContext,
  col: Collection<Advert>
) => {
  const { userId } = ctx;

  const userAdverts = await col
    .find<Advert>({ userId })
    .project<DataDB<UserAdvertsTable>>({
      title: 1,
      userId: 1,
      type: 1,
      createdAt: 1,
      updatedAt: 1,
    })
    .toArray();

  return userAdverts;
};
