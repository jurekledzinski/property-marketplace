import 'server-only';
import { Advert, DraftFile } from '@/models';
import { Collection, ObjectId } from 'mongodb';
import { DataDB } from '@/lib';
import { DeleteAdvertContext } from './types';

const projectionImages = { projection: { _id: 0, deleteImages: 1, images: 1 } };

export const getUserAdvertImages = async (
  ctx: DeleteAdvertContext,
  col: Collection<DataDB<Advert>>
) => {
  const advert = await col.findOne(
    { _id: new ObjectId(ctx.advertId), userId: ctx.userId },
    projectionImages
  );

  return advert ? [...advert.images, ...(advert.deleteImages || [])] : [];
};

export const getUserAdvertDraftImages = async (
  ctx: DeleteAdvertContext,
  col: Collection<DataDB<DraftFile>>
) => {
  const draft = await col.findOne(
    { advertId: ctx.advertId, userId: ctx.userId },
    projectionImages
  );

  return draft ? [...(draft.images || []), ...(draft.deleteImages || [])] : [];
};

export const deleteUserAdvert = async (
  ctx: DeleteAdvertContext,
  col: Collection<DataDB<Advert>>
) => {
  const result = await col.deleteOne({
    _id: new ObjectId(ctx.advertId),
    userId: ctx.userId,
  });

  return result.deletedCount === 1;
};
