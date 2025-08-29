import 'server-only';
import { Advert } from '@/models';
import { fetchResponse, getOptions } from './fetchApi';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { tryCatch } from './tryCatch';
import { getDomain } from '../helpers/getDomain';
import { endpoints } from './configApi';

export interface UserAdverts
  extends Pick<Advert, 'userId' | 'title' | 'type' | 'createdAt'> {
  id: string;
  stage: string;
  actions: string;
}

export const fetchAdverts = tryCatch<Advert[]>(
  async (url: string, headers?: ReadonlyHeaders) => {
    const options = getOptions(['adverts'], headers);
    const response = await fetch(url, options);
    return fetchResponse(response);
  }
);

export const getAdverts = async () => {
  const domain = await getDomain();
  const response = await fetchAdverts(endpoints.adverts(domain));
  return response.success ? response.payload : null;
};
