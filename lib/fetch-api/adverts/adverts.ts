import 'server-only';
import { Advert } from '@/models';

import {
  AdvertDetails,
  Adverts,
  fetchApi,
  getDomain,
  ReadonlyHeaders,
  serverEndpoints,
  UserAdvertsTable,
} from '@/lib';

// Fetch user adverts server component

export const getUserAdvertsPage = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchApi<UserAdvertsTable[]>({
    tags: ['userAdverts'],
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
    tags: ['userAdvert'],
    url: serverEndpoints.userAdvert(domain, advertId),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};

// Fetch all adverts server component

export const getAdvertsPage = async (
  searchParams: URLSearchParams,
  headers?: ReadonlyHeaders
) => {
  const domain = await getDomain();

  const response = await fetchApi<{ data: Adverts[]; totalItems: number }>({
    tags: ['adverts'],
    url: serverEndpoints.adverts(domain, searchParams),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};

// Fetch details advert server component

export const getAdvertPage = async (
  headers?: ReadonlyHeaders,
  advertId?: string
) => {
  const domain = await getDomain();

  const response = await fetchApi<AdvertDetails>({
    tags: ['advert'],
    url: serverEndpoints.advert(domain, advertId),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};
