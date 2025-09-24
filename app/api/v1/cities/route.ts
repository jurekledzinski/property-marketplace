import 'server-only';
import { NextRequest } from 'next/server';
import {
  errorResponseApi,
  GetCitiesSearchParams,
  getQueries,
  successResponseApi,
} from '@/lib';

export const GET = async (req: NextRequest) => {
  const { code } = getQueries<GetCitiesSearchParams>(req);

  if (!code) return errorResponseApi({ message: 'Internal server error' });

  const url = `https://data-api.oxilor.com/rest/regions?type=city&countryCode=${code}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_COUNTRIES_KEY}`,
    },
  });

  if (!res.ok) return errorResponseApi({ message: 'Internal server error' });

  const result = await res.json();

  return successResponseApi({ payload: result });
};
