import 'server-only';
import { serverEndpoints } from '../utils/serverEndpoints';
import { fetchApi } from '../utils/fetchApi';
import { getDomain } from '../../helpers/getDomain';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { UserAdvertsTable } from './types';
import { Advert } from '@/models';

// Fetch user adverts server component

export const getUserAdvertsPage = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchApi<UserAdvertsTable[]>({
    tags: ['adverts'],
    url: serverEndpoints.userAdverts(domain),
    headers,
  });

  return response.success ? response.payload : null;
};

// Fetch user advert server component

export const getUserAdvertPage = async (
  headers?: ReadonlyHeaders,
  advertId?: string
) => {
  const domain = await getDomain();

  const response = await fetchApi<Advert>({
    tags: ['advert'],
    url: serverEndpoints.userAdvert(domain, advertId),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};
