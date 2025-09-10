import 'server-only';
import { Advert, DraftFile } from '@/models';
import { auth } from '@/auth';
import { ObjectId } from 'mongodb';

import {
  connectDBAuth,
  deleteImagesImagekit,
  errorResponseApi,
  getBodyRequest,
  getCollectionDb,
  successResponseApi,
} from '@/lib';

type BodyDraftDelete = Pick<DraftFile, 'deleteImages' | 'images'>;
type BodyDraftPatch = BodyDraftDelete;

export const GET = connectDBAuth(
  auth(async (req) => {
    const searchParams = req.nextUrl.searchParams;
    const advertId = searchParams.get('id') || '';
    const mode = (searchParams.get('mode') || '') as 'edit' | 'new';

    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const draftCollection = getCollectionDb<DraftFile>('draftImages');
    const advertCollection = getCollectionDb<Advert>('adverts');

    if (!draftCollection || !advertCollection) {
      return errorResponseApi({ status: 500 });
    }

    const draftDb = await draftCollection.findOne({
      advertId,
      mode,
      userId: req.auth.user.id,
      $nor: [{ status: 'failed' }],
    });

    const advert = advertId
      ? await advertCollection.findOne({ _id: new ObjectId(advertId) })
      : null;

    if (draftDb) {
      return successResponseApi({
        message: 'Draft already exist',
        payload: {
          advertId,
          deleteImages: draftDb.deleteImages,
          images: draftDb.images,
        },
      });
    } else {
      const initialImages = advert ? advert.images : [];

      const newDraft = await draftCollection.findOneAndUpdate(
        { mode, userId: req.auth.user.id },
        {
          $set: {
            ...(advertId && { advertId }),
            mode,
            updatedAt: new Date(),
          },
          $setOnInsert: { createdAt: new Date(), images: initialImages },
        },
        { upsert: true, returnDocument: 'after' }
      );

      if (!newDraft) {
        return errorResponseApi({ message: 'Not found', status: 404 });
      }

      return successResponseApi({
        message: 'Draft created successfull',
        payload: {
          deleteImages: newDraft.deleteImages,
          images: newDraft.images,
        },
      });
    }
  })
);

export const PATCH = connectDBAuth(
  auth(async (req) => {
    const body = await getBodyRequest<BodyDraftPatch>(req);
    const deleteImages = body.deleteImages || [];
    const images = body.images || [];
    const searchParams = req.nextUrl.searchParams;
    const advertId = searchParams.get('id') ?? '';

    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    if (!images || !deleteImages) {
      return errorResponseApi({ message: 'Not found', status: 404 });
    }

    const collection = getCollectionDb<DraftFile>('draftImages');

    if (!collection) return errorResponseApi({ status: 500 });

    const draftDb = await collection.findOne({
      advertId,
      userId: req.auth.user.id,
    });

    if (draftDb) {
      await collection.updateOne(
        { advertId, userId: req.auth.user.id },
        {
          $set: {
            deleteImages,
            images,
            updatedAt: new Date(),
          },
        }
      );
    } else {
      await collection.updateOne(
        {
          $or: [{ advertId: { $exists: false } }, { advertId: undefined }],
          userId: req.auth.user.id,
        },
        {
          $set: {
            ...(advertId && { advertId }),
            deleteImages,
            images,
            updatedAt: new Date(),
          },
        }
      );
    }

    return successResponseApi({ message: 'Draft update successfull' });
  })
);

export const DELETE = connectDBAuth(
  auth(async (req) => {
    const body = await getBodyRequest<BodyDraftDelete>(req);
    const deleteImages = body.deleteImages || [];
    const images = body.images || [];

    const searchParams = req.nextUrl.searchParams;
    const advertId = searchParams.get('id');

    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const result = await deleteImagesImagekit({
      checkIsOriginal: true,
      images: [...images, ...deleteImages],
      userId: req.auth.user.id,
      advertId,
    });

    if (result !== undefined && !result) {
      return errorResponseApi({ status: 500 });
    }

    return successResponseApi({ message: 'Draft deleted successfull' });
  })
);
