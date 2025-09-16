import 'server-only';
import { Advert, Message } from '@/models';
import { auth } from '@/auth';

import {
  connectDBAuth,
  DataDB,
  errorResponseApi,
  getCollectionDb,
  getUserAnalytics,
  successResponseApi,
} from '@/lib';

export const GET = connectDBAuth(
  auth(async (req) => {
    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const ctx = { userId: req.auth.user.id };

    const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');
    const messagesCol = getCollectionDb<DataDB<Message>>('messages');

    if (!advertsCol || !messagesCol) {
      return errorResponseApi({ message: 'Internal server error' });
    }

    const analitycs = await getUserAnalytics(ctx, advertsCol, messagesCol);

    return successResponseApi({ payload: analitycs });
  })
);
