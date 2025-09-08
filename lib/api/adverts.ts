import 'server-only';
import { serverEndpoint } from './serverEndpoints';
import { fetchApi } from './fetchApi';
import { getDomain } from '../helpers/getDomain';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { UserAdvertsTable } from './types';
import { Advert } from '@/models';

// Fetch user adverts

export const getUserAdverts = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchApi<UserAdvertsTable[]>({
    tags: ['adverts'],
    url: serverEndpoint.userAdverts(domain),
    headers,
  });

  return response.success ? response.payload : null;
};

// Fetch user advert

export const getUserAdvert = async (
  headers?: ReadonlyHeaders,
  advertId?: string
) => {
  const domain = await getDomain();

  const response = await fetchApi<Advert>({
    tags: ['advert'],
    url: serverEndpoint.userAdvert(domain, advertId),
    headers,
  });

  return response.success ? response.payload : null;
};
