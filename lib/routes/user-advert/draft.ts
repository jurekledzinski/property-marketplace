import 'server-only';
import { Advert, DraftFile } from '@/models';
import { Collection, Filter, ObjectId } from 'mongodb';
import { GETDraftContext, PATCHDraftContext } from './types';

// --- GET ---

export const createDraftQuery = (ctx: GETDraftContext) => {
  const { advertId, mode, userId } = ctx;

  const query: Filter<DraftFile> = {
    mode,
    userId,
    $nor: [{ status: 'failed' }],
  };

  if (advertId) query['advertId'] = advertId;

  return query;
};

export const getAdvert = async (
  ctx: GETDraftContext,
  coll: Collection<Advert>
) => {
  const { advertId } = ctx;

  if (advertId) {
    const advert = await coll.findOne({ _id: new ObjectId(advertId) });
    return advert ? advert.images : [];
  }

  return [];
};

export const updateDraft = async (
  ctx: GETDraftContext,
  coll: Collection<DraftFile>,
  images: DraftFile['images']
) => {
  const { advertId, mode, userId } = ctx;

  const newDraft = await coll.findOneAndUpdate(
    { mode, userId },
    {
      $set: {
        ...(advertId && { advertId }),
        mode,
        updatedAt: new Date(),
      },
      $setOnInsert: { createdAt: new Date(), images },
    },
    { upsert: true, returnDocument: 'after' }
  );

  return newDraft;
};

export const updateContext = (
  ctx: GETDraftContext,
  deleteImages: GETDraftContext['deleteImages'],
  images: GETDraftContext['images']
) => {
  ctx['deleteImages'] = deleteImages;
  ctx['images'] = images;
  return ctx;
};

export const createDraftExistPayload = (ctx: GETDraftContext) => ({
  message: 'Draft already exist',
  payload: {
    advertId: ctx.advertId,
    deleteImages: ctx.deleteImages || [],
    images: ctx.images || [],
  },
});

export const createDraftCreatePayload = (ctx: GETDraftContext) => ({
  message: 'Draft created successfull',
  payload: {
    deleteImages: ctx.deleteImages,
    images: ctx.images,
  },
});

// --- PATCH ---

export const createPATCHDraftQuery = (ctx: PATCHDraftContext) => {
  const { advertId, userId } = ctx;

  const query: Filter<DraftFile> = {
    userId,
  };

  if (advertId) query['advertId'] = advertId;

  return query;
};

export const updateDraftExist = async (
  ctx: PATCHDraftContext,
  coll: Collection<DraftFile>,
  query: ReturnType<typeof createPATCHDraftQuery>
) => {
  const { deleteImages, images } = ctx;

  await coll.updateOne(query, {
    $set: {
      deleteImages: deleteImages || [],
      images: images || [],
      updatedAt: new Date(),
    },
  });
};

export const updateDraftNotExist = async (
  ctx: PATCHDraftContext,
  coll: Collection<DraftFile>
) => {
  const { advertId, deleteImages, images, userId } = ctx;

  await coll.updateOne(
    {
      $or: [{ advertId: { $exists: false } }, { advertId: undefined }],
      userId,
    },
    {
      $set: {
        ...(advertId && { advertId }),
        deleteImages: deleteImages || [],
        images: images || [],
        updatedAt: new Date(),
      },
    }
  );
};
