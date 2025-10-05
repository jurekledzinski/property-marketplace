import 'server-only';
import { auth } from '@/auth';
import { getUserMessages } from '@/services';
import { Message } from '@/models';

import {
  connectDBAuth,
  DataDB,
  errorResponseApi,
  formatDBDocumentId,
  getCollectionDb,
  successResponseApi,
} from '@/lib';

export const GET = connectDBAuth(
  auth(async (req) => {
    if (!req.auth) {
      return errorResponseApi({ message: 'Unauthorized', status: 401 });
    }

    const ctx = { userId: req.auth.user.id };

    const messagesCol = getCollectionDb<DataDB<Message>>('messages');

    if (!messagesCol) {
      return errorResponseApi({ message: 'Internal server error' });
    }

    const messages = await getUserMessages(ctx, messagesCol);

    const result = formatDBDocumentId(messages);

    return successResponseApi({ payload: result });
  })
);
