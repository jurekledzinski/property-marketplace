import 'server-only';
import { Advert } from '@/models';
import { auth } from '@/auth';
import { connectDBAuth, DataDB, getCollectionDb } from '@/lib';
import { GetUserAdvertSearchParams } from '@/services';
import { ObjectId } from 'mongodb';

import {
  errorResponseApi,
  formatDBDocumentId,
  getQueries,
  successResponseApi,
} from '@/utils-server';

export const GET = connectDBAuth(
  auth(async (req) => {
    const { id } = getQueries<GetUserAdvertSearchParams>(req);

    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    if (!id) return errorResponseApi({ message: 'Internal server error' });

    const ctx = { advertId: id, userId: req.auth.user.id };

    const advertsCol = getCollectionDb<Advert>('adverts');

    if (!advertsCol) {
      return errorResponseApi({ message: 'Internal server error' });
    }

    const userAdvert = await advertsCol.findOne<DataDB<Advert>>({
      _id: new ObjectId(ctx.advertId),
      userId: ctx.userId,
    });

    if (!userAdvert) return errorResponseApi({ message: 'Not found' });

    const result = formatDBDocumentId(userAdvert);

    return successResponseApi({ payload: result });
  })
);
