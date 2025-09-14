import 'server-only';
import { Advert } from '@/models';
import { auth } from '@/auth';

import {
  connectDBAuth,
  getCollectionDb,
  errorResponseApi,
  formatDBDocumentId,
  getUserAdvertsApi,
} from '@/lib';

export const GET = connectDBAuth(
  auth(async (req) => {
    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const ctx = { userId: req.auth.user.id };

    const advertsCol = getCollectionDb<Advert>('adverts');

    if (!advertsCol) return errorResponseApi({ status: 500 });

    const userAdverts = await getUserAdvertsApi(ctx, advertsCol);

    if (!userAdverts) return errorResponseApi({ status: 404 });

    const result = formatDBDocumentId(userAdverts);

    return Response.json({ success: true, payload: result });
  })
);
