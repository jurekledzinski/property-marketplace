import 'server-only';
import { Advert, DraftFile } from '@/models';
import { auth } from '@/auth';
import { ObjectId } from 'mongodb';

import {
  connectDBAuth,
  errorResponseApi,
  getCollectionDb,
  successResponseApi,
} from '@/lib';

export const GET = connectDBAuth(
  auth(async (request) => {
    const searchParams = request.nextUrl.searchParams;
    const advertId = searchParams.get('id') || '';
    const mode = (searchParams.get('mode') || '') as 'edit' | 'new';

    if (!request.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const draftCollection = getCollectionDb<DraftFile>('draftImages');
    const advertCollection = getCollectionDb<Advert>('adverts');

    if (!draftCollection || !advertCollection) {
      return errorResponseApi({ status: 500 });
    }

    console.log('GET ADVERT DRAFT advertId', advertId);
    console.log('GET ADVERT mode', mode);

    const draftDb = await draftCollection.findOne({
      advertId,
      mode,
      userId: request.auth.user.id,
    });

    const advert = advertId
      ? await advertCollection.findOne({ _id: new ObjectId(advertId) })
      : null;

    console.log('GET draftDb', draftDb);
    console.log('GET advert', advert);

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
        { mode, userId: request.auth.user.id },
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
  auth(async (request) => {
    const { deletedImages, images } = await request.json();
    const searchParams = request.nextUrl.searchParams;
    const advertId = searchParams.get('id') ?? '';

    if (!request.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    if (!images) {
      return errorResponseApi({ message: 'Not found', status: 404 });
    }

    const collection = getCollectionDb<DraftFile>('draftImages');

    if (!collection) return errorResponseApi({ status: 500 });

    const draftDb = await collection.findOne({
      advertId,
      userId: request.auth.user.id,
    });

    if (draftDb) {
      await collection.updateOne(
        { advertId, userId: request.auth.user.id },
        {
          $set: {
            deleteImages: deletedImages,
            images,
            updatedAt: new Date(),
          },
        }
      );
    } else {
      await collection.updateOne(
        {
          $or: [{ advertId: { $exists: false } }, { advertId: undefined }],
          userId: request.auth.user.id,
        },
        {
          $set: {
            ...(advertId && { advertId }),
            deleteImages: deletedImages,
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
  auth(async (request) => {
    const searchParams = request.nextUrl.searchParams;
    const draftId = searchParams.get('draftId');

    if (!request.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    if (!draftId) {
      return errorResponseApi({ message: 'Not found', status: 404 });
    }

    const collection = getCollectionDb<DraftFile>('draftImages');

    if (!collection) return errorResponseApi({ status: 500 });

    return successResponseApi({ message: 'Draft deleted successfull' });
  })
);
