import 'server-only';
import { Advert, DraftFile, Message, User } from '@/models';
import { Collection, ObjectId } from 'mongodb';
import { DataDB } from '@/lib';
import { DeleteAccountContext } from './types';
import { mergeImages } from './utils';

const projectionImages = { projection: { _id: 0, deleteImages: 1, images: 1 } };

export const getAllUserAdverts = async (
  ctx: DeleteAccountContext,
  col: Collection<DataDB<Advert>>
) => {
  const allAdverts = await col
    .find({ userId: ctx.userId }, projectionImages)
    .toArray();

  const result = mergeImages(allAdverts);
  return result.images;
};

export const getAllUserDrafts = async (
  ctx: DeleteAccountContext,
  col: Collection<DataDB<DraftFile>>
) => {
  const allDrafts = await col
    .find({ userId: ctx.userId }, projectionImages)
    .toArray();

  const result = mergeImages(allDrafts);
  return result.images;
};

export const deleteUserAdverts = async (
  ctx: DeleteAccountContext,
  col: Collection<DataDB<Advert>>
) => {
  await col.deleteMany({ userId: ctx.userId });
};

export const deleteUserMessages = async (
  ctx: DeleteAccountContext,
  col: Collection<DataDB<Message>>
) => {
  await col.deleteMany({ userId: ctx.userId });
};

export const deleteUser = async (
  ctx: DeleteAccountContext,
  col: Collection<DataDB<User>>
) => {
  await col.deleteOne({ _id: new ObjectId(ctx.userId) });
};
