import 'server-only';
import { serverEndpoints } from '../utils/serverEndpoints';
import { fetchApi } from '../utils/fetchApi';
import { getDomain } from '../../helpers/getDomain';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { Adverts, UserAdvertsTable } from './types';
import { Advert } from '@/models';

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

export const getAdvertsPage = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchApi<Adverts[]>({
    tags: ['adverts'],
    url: serverEndpoints.adverts(domain),
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

  const response = await fetchApi<Advert>({
    tags: ['advert'],
    url: serverEndpoints.advert(domain, advertId),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};
