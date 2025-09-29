import 'server-only';
import { fetchApi, serverEndpoints } from '@/lib';
import { Country } from './types';

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
