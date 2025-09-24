'use client';
import { clientEndpoints } from '@/utils';
import { fetchApiClient } from '@/helpers';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';

export const useFetchCities = () => {
  const countryCode = useRef('');

  const { data, refetch } = useQuery({
    queryKey: ['cities'],
    queryFn: async () => {
      return await fetchApiClient({
        url: clientEndpoints.cities(countryCode.current),
      });
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const getCities = (code: string) => {
    countryCode.current = code;
    refetch();
  };

  console.log('data cities', data);

  return { getCities };
};
