import 'server-only';
import {
  connectDB,
  DataDB,
  errorResponseApi,
  formatDBDocumentId,
  getAdvert,
  GetAdvertSearchParams,
  getCollectionDb,
  getQueries,
  successResponseApi,
} from '@/lib';
import { Advert } from '@/models';
import { NextRequest } from 'next/server';

export const GET = connectDB(async (req: NextRequest) => {
  const { id } = getQueries<GetAdvertSearchParams>(req);

  if (!id) return errorResponseApi({ message: 'Not found' });

  const ctx = { advertId: id };

  const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');

  if (!advertsCol) {
    return errorResponseApi({ message: 'Internal server error' });
  }

  const advert = await getAdvert(ctx, advertsCol);

  if (!advert) return errorResponseApi({ message: 'Not found' });

  const result = formatDBDocumentId(advert);

  return successResponseApi({ payload: result });
});
