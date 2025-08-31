import 'server-only';
import { Advert } from '@/models';
import { auth } from '@/auth';

import {
  connectDBAuth,
  getCollectionDb,
  errorResponseApi,
  DataDB,
  formatDBDocumentId,
} from '@/lib';
import { ObjectId } from 'mongodb';

export const GET = connectDBAuth(
  auth(async (request) => {
    const searchParams = request.nextUrl.searchParams;
    const advertId = searchParams.get('id');

    if (!request.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    if (!advertId) {
      return errorResponseApi({
        message: 'internal server error',
        status: 500,
      });
    }

    const collection = getCollectionDb<Advert>('adverts');

    if (!collection) {
      return errorResponseApi({
        message: 'internal server error',
        status: 500,
      });
    }

    const userAdvert = await collection.findOne<DataDB<Advert>>({
      _id: new ObjectId(advertId),
      userId: request.auth.user.id,
    });

    if (!userAdvert) {
      return errorResponseApi({
        message: 'Advert not found',
        status: 404,
      });
    }

    const result = formatDBDocumentId(userAdvert);

    return Response.json({ success: true, payload: result });
  })
);
