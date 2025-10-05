import 'server-only';
import { fetchApi, ReadonlyHeaders, serverEndpoints } from '@/services';
import { getDomain } from '@/lib';
import { Messages } from './types';

// Fetch all user messages server component

export const getMessagesPage = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchApi<Messages[]>({
    tags: ['messages'],
    url: serverEndpoints.userMessages(domain),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};
