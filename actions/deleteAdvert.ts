'use server';
import { Advert, DraftFile } from '@/models';
import { auth } from '@/auth';
import { revalidateTag } from 'next/cache';
import { uniqBy } from 'lodash';

import {
  connectDBAction,
  DataDB,
  deleteImagesImagekit,
  deleteUserAdvert,
  errorResponseAction,
  getCollectionDb,
  getUserAdvertImages,
  getUserAdvertDraftImages,
  successResponseAction,
} from '@/lib';

export const deleteAdvert = connectDBAction(
  async (prevState: unknown, formData: FormData) => {
    const session = await auth();
    const { advertId } = Object.fromEntries(formData);

    if (!session) return errorResponseAction('Unauthorized');

    const ctx = { advertId: advertId.toString(), userId: session.user.id };

    const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');
    const draftsCol = getCollectionDb<DataDB<DraftFile>>('draftImages');

    if (!advertsCol || !draftsCol) {
      return errorResponseAction('Internal server error');
    }

    const advertImages = await getUserAdvertImages(ctx, advertsCol);
    const draftImages = await getUserAdvertDraftImages(ctx, draftsCol);

    const mergedImages = uniqBy([...advertImages, ...draftImages], 'fileId');

    const result = await deleteImagesImagekit({
      checkIsOriginal: false,
      images: mergedImages,
      userId: session.user.id,
    });

    if (result === false) return errorResponseAction('Internal server error');

    const resultDeleteAdvert = await deleteUserAdvert(ctx, advertsCol);

    if (!resultDeleteAdvert) {
      return errorResponseAction('Delete failed: No document found');
    }

    revalidateTag('userAdverts');
    return successResponseAction('Account delete successful');
  }
);
