'use client';
import { clientEndpoints } from '@/utils';
import { usePaginatedQuery } from '../paginanted-query';

export const useFetchCities = () => {
  return usePaginatedQuery({
    buildUrl: ({ afterId, code, div1Code }) =>
      clientEndpoints.cities(code, div1Code, afterId),
    queryKey: ['cities'],
  });
};
