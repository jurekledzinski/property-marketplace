import 'server-only';
import { Advert } from '@/models';
import { auth } from '@/auth';

import {
  connectDBAuth,
  getCollectionDb,
  errorResponseApi,
  UserAdvertsTable,
  DataDB,
  formatDBDocumentId,
} from '@/lib';

export const GET = connectDBAuth(
  auth(async (request) => {
    if (!request.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const collection = getCollectionDb<Advert>('adverts');

    if (!collection) return errorResponseApi({ status: 500 });

    const userAdverts = await collection
      .find<Advert>({ userId: request.auth.user.id })
      .project<DataDB<UserAdvertsTable>>({
        title: 1,
        userId: 1,
        type: 1,
        createdAt: 1,
      })
      .toArray();

    if (!userAdverts) return errorResponseApi({ status: 404 });

    const result = formatDBDocumentId(userAdverts);

    return Response.json({ success: true, payload: result });
  })
);
