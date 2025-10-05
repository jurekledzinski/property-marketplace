import 'server-only';
import { Advert } from '@/models';
import { Collection, ObjectId } from 'mongodb';
import { DataDB } from '@/lib';
import { GetAdvertContext } from './types';

// --- GET ---

export const getAdvert = async (
  ctx: GetAdvertContext,
  col: Collection<DataDB<Advert>>
) => {
  const advert = await col.findOne<DataDB<Advert>>({
    _id: new ObjectId(ctx.advertId),
  });
  return advert;
};

export const updateAdvertViews = async (
  ctx: GetAdvertContext,
  col: Collection<DataDB<Advert>>
) => {
  const advert = await col.updateOne(
    {
      _id: new ObjectId(ctx.advertId),
    },
    { $inc: { views: 1 } }
  );
  return advert;
};
