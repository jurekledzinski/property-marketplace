import 'server-only';
import { Advert, DraftFile } from '@/models';
import { auth } from '@/auth';
import { getQueries } from '@/lib/helpers/searchParmsApi';

import {
  connectDBAuth,
  deleteImagesImagekit,
  errorResponseApi,
  getBodyRequest,
  getCollectionDb,
  successResponseApi,
  getAdvert,
  createDraftQuery,
  updateDraft,
  GETDraftSearchParams,
  updateContext,
  createDraftExistPayload,
  createDraftCreatePayload,
  PATCHDraftSearchParams,
  createPATCHDraftQuery,
  updateDraftExist,
  updateDraftNotExist,
  DELETEDraftSearchParams,
  DELETEBodyDraft,
  PATCHBodyDraft,
} from '@/lib';

export const GET = connectDBAuth(
  auth(async (req) => {
    const { id, mode } = getQueries<GETDraftSearchParams>(req);

    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const ctx = { advertId: id, mode, userId: req.auth.user.id };

    const draftCol = getCollectionDb<DraftFile>('draftImages');
    const advertCol = getCollectionDb<Advert>('adverts');

    if (!draftCol || !advertCol) return errorResponseApi({ status: 500 });

    const query = createDraftQuery(ctx);
    const draftDb = await draftCol.findOne(query);

    if (draftDb) {
      const draftCtx = updateContext(ctx, draftDb.deleteImages, draftDb.images);
      const successResponseOptions = createDraftExistPayload(draftCtx);
      return successResponseApi(successResponseOptions);
    } else {
      const initialImages = await getAdvert(ctx, advertCol);
      const newDraft = await updateDraft(ctx, draftCol, initialImages);

      if (!newDraft) {
        return errorResponseApi({ message: 'Not found', status: 404 });
      }

      const newCtx = updateContext(ctx, newDraft.deleteImages, newDraft.images);
      const successResponseOptions = createDraftCreatePayload(newCtx);

      return successResponseApi(successResponseOptions);
    }
  })
);

export const PATCH = connectDBAuth(
  auth(async (req) => {
    const { deleteImages, images } = await getBodyRequest<PATCHBodyDraft>(req);
    const { id } = getQueries<PATCHDraftSearchParams>(req);

    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    if (!images || !deleteImages) {
      return errorResponseApi({ message: 'Not found', status: 404 });
    }

    const ctx = {
      advertId: id,
      images,
      deleteImages,
      userId: req.auth.user.id,
    };

    const draftCol = getCollectionDb<DraftFile>('draftImages');

    if (!draftCol) return errorResponseApi({ status: 500 });

    const query = createPATCHDraftQuery(ctx);
    const draftDb = await draftCol.findOne(query);

    if (draftDb) updateDraftExist(ctx, draftCol, query);
    else updateDraftNotExist(ctx, draftCol);

    return successResponseApi({ message: 'Draft update successfull' });
  })
);

export const DELETE = connectDBAuth(
  auth(async (req) => {
    const { deleteImages, images } = await getBodyRequest<DELETEBodyDraft>(req);
    const { id } = getQueries<DELETEDraftSearchParams>(req);

    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const result = await deleteImagesImagekit({
      checkIsOriginal: true,
      images: [...(images || []), ...(deleteImages || [])],
      userId: req.auth.user.id,
      advertId: id,
    });

    if (result !== undefined && !result) {
      return errorResponseApi({ status: 500 });
    }

    return successResponseApi({ message: 'Draft deleted successfull' });
  })
);
