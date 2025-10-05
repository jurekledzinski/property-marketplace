import 'server-only';
import { GetStatesSearchParams } from '@/services';
import { NextRequest } from 'next/server';

import {
  errorResponseApi,
  getQueries,
  successResponseApi,
} from '@/utils-server';

export const GET = async (req: NextRequest) => {
  const { after, code } = getQueries<GetStatesSearchParams>(req);

  if (!code) return errorResponseApi({ message: 'Internal server error' });

  const url = after
    ? `https://data-api.oxilor.com/rest/regions?countryCode=${code}&first=10&type=division1&after=${after}`
    : `https://data-api.oxilor.com/rest/regions?countryCode=${code}&first=10&type=division1`;

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
