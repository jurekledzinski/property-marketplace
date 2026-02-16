'use server';
import { Advert, DraftFile, Message, User } from '@/models';
import { auth } from '@/auth';
import { connectDBAction, DataDB, getCollectionDb } from '@/lib';
import { errorResponseAction, successResponseAction } from '@/utils-server';
import { revalidateTag } from 'next/cache';
import { uniqBy } from 'lodash';

import {
  deleteImagesImagekit,
  deleteUser,
  deleteUserAdverts,
  deleteUserMessages,
  getAllUserAdverts,
  getAllUserDrafts,
} from '@/services';

export const deleteAccount = connectDBAction(async () => {
  const session = await auth();

  if (!session) return errorResponseAction('Unauthorized');

  const ctx = { userId: session.user.id };

  const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');
  const draftsCol = getCollectionDb<DataDB<DraftFile>>('draftImages');
  const messagesCol = getCollectionDb<DataDB<Message>>('messages');
  const usersCol = getCollectionDb<DataDB<User>>('users');

  if (!advertsCol || !draftsCol || !messagesCol || !usersCol) {
    return errorResponseAction('Internal server error');
  }

  const advertsImages = await getAllUserAdverts(ctx, advertsCol);
  const draftsImages = await getAllUserDrafts(ctx, draftsCol);

  const mergedImages = uniqBy([...advertsImages, ...draftsImages], 'fileId');

  const result = await deleteImagesImagekit({
    checkIsOriginal: false,
    images: mergedImages,
    userId: session.user.id,
  });

  if (result === false) return errorResponseAction('Internal server error');

  await deleteUserAdverts(ctx, advertsCol);
  await deleteUserMessages(ctx, messagesCol);

  if (ctx.userId === process.env.EXAMPLE_USER_ID) {
    return successResponseAction('Thanks for visit this page');
  }

  await deleteUser(ctx, usersCol);

  revalidateTag('adverts', 'max');
  return successResponseAction('Account delete successful');
});
