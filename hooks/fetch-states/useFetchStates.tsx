'use client';
import { clientEndpoints } from '@/utils';
import { CountryState } from './types';
import { fetchApiClient } from '@/helpers';
import { ApiSuccessResponse, States } from '@/lib';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';

export const useFetchStates = () => {
  const countryCode = useRef('');
  const afterId = useRef('');
  const hasNextPage = useRef(false);
  const [countryStates, setCountryStates] = useState<CountryState[]>([]);

  const { data, refetch, isSuccess } = useQuery({
    queryKey: ['states'],
    queryFn: async () => {
      console.log('countryCode.current STATES', countryCode.current);
      return await fetchApiClient<States>({
        url: clientEndpoints.states(countryCode.current, afterId.current),
      });
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  console.log('data fetch states', data);

  const handleResultStates = (data: ApiSuccessResponse<States>) => {
    const payload = data.payload!;

    const isMoreData = payload.pageInfo?.hasNextPage;

    hasNextPage.current = isMoreData;

    const edges = payload.edges.map((item) => ({
      code: item.node.countryCode,
      name: item.node.name,
      cursor: item.cursor,
    }));

    const lastElement = edges.slice(-1);

    if (isMoreData && lastElement.length) {
      afterId.current = lastElement[0].cursor;
    }

    return edges;
  };

  const getStates = async (code: string) => {
    countryCode.current = code;

    const result = await refetch();

    if (result.isSuccess) {
      const { data } = result;
      if (!data.success || !data.payload) return;
      const edges = handleResultStates(data);
      setCountryStates(edges);
    }
  };

  const onScrollEndStates = async () => {
    console.log('1 Scroll end hasNextPage', hasNextPage.current);
    if (!hasNextPage.current) return;

    const result = await refetch();

    if (result.isSuccess) {
      const { data } = result;
      if (!data.success || !data.payload) return;
      const edges = handleResultStates(data);
      setCountryStates((prev) => [...prev, ...edges]);
    }
  };

  return { countryStates, getStates, isSuccess, onScrollEndStates };
};
