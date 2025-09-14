import 'server-only';
import { Advert } from '@/models';
import { Collection } from 'mongodb';
import { DataDB } from '@/lib';

// --- GET ---

export const getAdverts = async (col: Collection<DataDB<Advert>>) => {
  const adverts = await col.find<DataDB<Advert>>({}).toArray();
  return adverts;
};
