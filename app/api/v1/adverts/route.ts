import 'server-only';
import { Advert } from '@/models';
import { connectDB, DataDB, getCollectionDb } from '@/lib';
import { getAdverts, GetAdvertsSearchParams } from '@/services';

import {
  decodeQueryUrl,
  errorResponseApi,
  formatDBDocumentId,
  getQueries,
  successResponseApi,
} from '@/utils-server';

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
