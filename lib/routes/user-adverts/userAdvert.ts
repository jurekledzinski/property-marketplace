import 'server-only';
import { Advert } from '@/models';
import { Collection } from 'mongodb';
import { DataDB } from '@/lib/database';
import { GETUserAdvertsContext } from './types';
import { UserAdvertsTable } from '@/lib/api';

// --- GET ---

export const getUserAdverts = async (
  ctx: GETUserAdvertsContext,
  coll: Collection<Advert>
) => {
  const { userId } = ctx;

  const userAdverts = await coll
    .find<Advert>({ userId })
    .project<DataDB<UserAdvertsTable>>({
      title: 1,
      userId: 1,
      type: 1,
      createdAt: 1,
    })
    .toArray();

  return userAdverts;
};
