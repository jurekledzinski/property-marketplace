import 'server-only';
import { Advert } from '@/models';

import {
  connectDB,
  DataDB,
  decodeQueryUrl,
  errorResponseApi,
  formatDBDocumentId,
  getAdverts,
  getCollectionDb,
  getQueries,
  successResponseApi,
  GetAdvertsSearchParams,
} from '@/lib';

export const GET = connectDB(async (req) => {
  const searchParams = getQueries<GetAdvertsSearchParams>(req);

  const decodedParams = decodeQueryUrl(searchParams, ['amenities']);

  const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');

  if (!advertsCol) {
    return errorResponseApi({ message: 'Internal server error' });
  }

  const adverts = await getAdverts(advertsCol, decodedParams);

  const result = formatDBDocumentId(adverts.data);

  return successResponseApi({
    payload: {
      data: result,
      totalItems: adverts.totalItems,
    },
  });
});
