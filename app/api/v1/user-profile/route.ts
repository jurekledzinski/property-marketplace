import 'server-only';
import { auth } from '@/auth';
import { connectDBAuth, DataDB, getCollectionDb } from '@/lib';
import { getUserProfile } from '@/services';
import { User } from '@/models';

import {
  errorResponseApi,
  formatDBDocumentId,
  successResponseApi,
} from '@/utils-server';

export const GET = connectDBAuth(
  auth(async (req) => {
    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const ctx = { userId: req.auth.user.id };

    const usersCol = getCollectionDb<DataDB<User>>('users');

    if (!usersCol) {
      return errorResponseApi({ message: 'Internal server error' });
    }

    const user = await getUserProfile(ctx, usersCol);

    if (!user) return errorResponseApi({ message: 'Not found', status: 404 });

    const result = formatDBDocumentId(user);

    return successResponseApi({ payload: result });
  })
);
