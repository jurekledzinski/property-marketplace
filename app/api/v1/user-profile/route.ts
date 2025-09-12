import 'server-only';
import { auth } from '@/auth';
import { User } from '@/models';
import {
  connectDBAuth,
  DataDB,
  errorResponseApi,
  formatDBDocumentId,
  getCollectionDb,
  getUserProfile,
  successResponseApi,
} from '@/lib';

export const GET = connectDBAuth(
  auth(async (req) => {
    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const ctx = { userId: req.auth.user.id };

    const userCol = getCollectionDb<DataDB<User>>('adverts');

    if (!userCol) return errorResponseApi({ status: 500 });

    const user = await getUserProfile(ctx, userCol);

    if (!user) return errorResponseApi({ message: 'Not found', status: 404 });

    const result = formatDBDocumentId(user);

    return successResponseApi({ payload: result });
  })
);
