import 'server-only';
import { connectDB, getCollectionDb, errorResponseApi } from '@/lib';

import { NextRequest } from 'next/server';
import { Advert } from '@/models';
import { auth } from '@/auth';

export const GET = connectDB(async (request: NextRequest) => {
  const session = await auth();

  if (!session) {
    return errorResponseApi({ message: 'Unauthorized', status: 401 });
  }

  const collection = getCollectionDb<Advert>('adverts');

  if (!collection) return errorResponseApi({ status: 500 });

  const adverts = await collection
    .find<Advert>({ userId: session.user.id })
    .project({ title: 1, userId: 1, type: 1, createdAt: 1 })
    .toArray();

  if (!adverts) return errorResponseApi({ status: 404 });

  return Response.json({ success: true, payload: adverts });
});
