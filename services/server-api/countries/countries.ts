import 'server-only';
import { Country } from './types';
import { fetchApi } from '@/services';
import { serverEndpoints } from '@/utils-server';

// Fetch countries server component

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', `Bearer ${process.env.API_COUNTRIES_KEY}`);

export const getCountries = async () => {
  const response = await fetchApi<Country[]>({
    url: serverEndpoints.countries(),
    cache: 'force-cache',
    headers,
  });

  return response as unknown as Country[];
};
