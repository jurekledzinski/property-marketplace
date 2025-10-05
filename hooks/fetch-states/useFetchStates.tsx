'use client';
import { clientEndpoints } from '@/utils-client';
import { usePaginatedQuery } from '../paginanted-query';

export const useFetchStates = () => {
  return usePaginatedQuery({
    buildUrl: ({ afterId, code }) => clientEndpoints.states(code, afterId),
    queryKey: ['states'],
  });
};
