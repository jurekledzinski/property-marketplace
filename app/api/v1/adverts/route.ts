import 'server-only';
import {
  connectDB,
  DataDB,
  errorResponseApi,
  formatDBDocumentId,
  getAdverts,
  getCollectionDb,
  successResponseApi,
} from '@/lib';
import { Advert } from '@/models';

export const GET = connectDB(async () => {
  const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');

  if (!advertsCol) {
    return errorResponseApi({ message: 'Internal server error' });
  }

  const adverts = await getAdverts(advertsCol);

  const result = formatDBDocumentId(adverts);

  return successResponseApi({ payload: result });
});
