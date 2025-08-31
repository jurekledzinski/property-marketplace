import 'server-only';
import { endpoints } from './configApi';
import { fetchData } from './fetchApi';
import { getDomain } from '../helpers/getDomain';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { UserAdvertsTable } from './types';
import { Advert } from '@/models';

// Fetch user adverts

export const getUserAdverts = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchData<UserAdvertsTable[]>({
    tags: ['adverts'],
    url: endpoints.userAdverts(domain),
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

  const response = await fetchData<Advert>({
    tags: ['advert'],
    url: endpoints.userAdvert(domain, advertId),
    headers,
  });

  return response.success ? response.payload : null;
};
