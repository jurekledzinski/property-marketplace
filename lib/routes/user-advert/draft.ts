import 'server-only';
import { Advert, DraftFile } from '@/models';
import { Collection, Filter, ObjectId } from 'mongodb';
import { GetDraftContext, PatchDraftContext } from './types';

// --- GET ---

export const createDraftQuery = (ctx: GetDraftContext) => {
  const { advertId, mode, userId } = ctx;

  const query: Filter<DraftFile> = {
    mode,
    userId,
    $nor: [{ status: 'failed' }],
  };

  if (advertId) query['advertId'] = advertId;

  return query;
};

export const getUserAdvert = async (
  ctx: GetDraftContext,
  col: Collection<Advert>
) => {
  const { advertId } = ctx;

  if (advertId) {
    const advert = await col.findOne({ _id: new ObjectId(advertId) });
    return advert ? advert.images : [];
  }

  return [];
};

export const updateDraft = async (
  ctx: GetDraftContext,
  col: Collection<DraftFile>,
  images: DraftFile['images']
) => {
  const { advertId, mode, userId } = ctx;

  const newDraft = await col.findOneAndUpdate(
    { mode, userId },
    {
      $set: {
        ...(advertId && { advertId }),
        images,
        mode,
        updatedAt: new Date(),
      },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true, returnDocument: 'after' }
  );

  return newDraft;
};

export const updateContext = (
  ctx: GetDraftContext,
  deleteImages: GetDraftContext['deleteImages'],
  images: GetDraftContext['images']
) => {
  ctx['deleteImages'] = deleteImages;
  ctx['images'] = images;
  return ctx;
};

export const createDraftExistPayload = (ctx: GetDraftContext) => ({
  message: 'Draft already exist',
  payload: {
    advertId: ctx.advertId,
    deleteImages: ctx.deleteImages || [],
    images: ctx.images || [],
  },
});

export const createDraftCreatePayload = (ctx: GetDraftContext) => ({
  message: 'Draft created successfull',
  payload: {
    deleteImages: ctx.deleteImages,
    images: ctx.images,
  },
});

// --- PATCH ---

export const createPATCHDraftQuery = (ctx: PatchDraftContext) => {
  const { advertId, userId } = ctx;

  const query: Filter<DraftFile> = {
    userId,
  };

  if (advertId) query['advertId'] = advertId;

  return query;
};

export const updateDraftExist = async (
  ctx: PatchDraftContext,
  col: Collection<DraftFile>,
  query: ReturnType<typeof createPATCHDraftQuery>
) => {
  const { deleteImages, images } = ctx;

  await col.updateOne(query, {
    $set: {
      deleteImages: deleteImages || [],
      images: images || [],
      updatedAt: new Date(),
    },
  });
};

export const updateDraftNotExist = async (
  ctx: PatchDraftContext,
  col: Collection<DraftFile>
) => {
  const { advertId, deleteImages, images, userId } = ctx;

  await col.updateOne(
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
