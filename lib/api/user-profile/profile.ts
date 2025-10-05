import 'server-only';
import { fetchApi, getDomain, ReadonlyHeaders, serverEndpoints } from '@/lib';
import { User } from '@/models';

export const getUserProfilePage = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchApi<Omit<User, 'password'> & { id: string }>({
    tags: ['user'],
    url: serverEndpoints.user(domain),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};
