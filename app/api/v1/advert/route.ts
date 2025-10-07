import 'server-only';
import { Advert } from '@/models';
import { connectDB, DataDB, getCollectionDb } from '@/lib';
import { NextRequest } from 'next/server';

import {
  errorResponseApi,
  formatDBDocumentId,
  getQueries,
  successResponseApi,
} from '@/utils-server';

import {
  updateAdvertViews,
  getAdvert,
  GetAdvertSearchParams,
} from '@/services';

export const GET = connectDB(async (req: NextRequest) => {
  const { id } = getQueries<GetAdvertSearchParams>(req);

  if (!id) return errorResponseApi({ message: 'Not found' });

  const ctx = { advertId: id };

  const advertsCol = getCollectionDb<DataDB<Advert>>('adverts');

  if (!advertsCol) {
    return errorResponseApi({ message: 'Internal server error' });
  }

  await updateAdvertViews(ctx, advertsCol);

  const advert = await getAdvert(ctx, advertsCol);

  if (!advert) return errorResponseApi({ message: 'Not found' });

  const result = formatDBDocumentId(advert);

  return successResponseApi({ payload: result });
});
