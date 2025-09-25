import 'server-only';
import { NextRequest } from 'next/server';
import {
  errorResponseApi,
  GetCitiesSearchParams,
  getQueries,
  successResponseApi,
} from '@/lib';

export const GET = async (req: NextRequest) => {
  const { after, code, division1Code } = getQueries<GetCitiesSearchParams>(req);

  if (!code || !division1Code) {
    return errorResponseApi({ message: 'Internal server error' });
  }

  const url = after
    ? `https://data-api.oxilor.com/rest/regions?type=city&countryCode=${code}&division1Code=${division1Code}&first=10&after=${after}`
    : `https://data-api.oxilor.com/rest/regions?type=city&countryCode=${code}&division1Code=${division1Code}&first=10`;

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
