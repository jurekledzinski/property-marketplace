'use client';
import { ApiSuccessResponse, States } from '@/services';
import { CountryState, UsePaginatedQueryProps } from './types';
import { fetchApiClient } from '@/helpers';
import { uniqBy } from 'lodash';
import { useCallback, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export const usePaginatedQuery = ({
  buildUrl,
  queryKey,
}: UsePaginatedQueryProps) => {
  const countryCode = useRef('');
  const div1Code = useRef('');
  const afterId = useRef('');
  const hasNextPage = useRef(false);
  const [dataList, setDataList] = useState<CountryState[]>([]);

  const { isSuccess, refetch, isFetching } = useQuery({
    queryKey,
    queryFn: async () => {
      return await fetchApiClient<States>({
        url: buildUrl({
          afterId: afterId.current,
          code: countryCode.current,
          div1Code: div1Code.current,
        }),
      });
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const handleResult = useCallback((data: ApiSuccessResponse<States>) => {
    const payload = data.payload!;

    const isMoreData = payload.pageInfo?.hasNextPage;

    hasNextPage.current = isMoreData;

    const edges = payload.edges.map((item) => ({
      code: item.node.countryCode,
      cursor: item.cursor,
      div1Code: item.node.division1Code,
      div2Code: item.node.division2Code,
      name: item.node.name,
    }));

    const lastElement = edges.slice(-1);

    if (isMoreData && lastElement.length) {
      afterId.current = lastElement[0].cursor;
    }

    return edges;
  }, []);

  const fetchData = useCallback(
    async (code: string, division1Code?: string) => {
      setDataList([]);
      afterId.current = '';
      countryCode.current = '';
      div1Code.current = '';

      if (code) countryCode.current = code;
      if (division1Code) div1Code.current = division1Code;

      const result = await refetch();

      if (result.isSuccess && result.data.success && result.data.payload) {
        const newData = handleResult(result.data);
        setDataList(newData);
      }
    },
    [handleResult, refetch]
  );

  const onScrollEnd = useCallback(async () => {
    if (!hasNextPage.current) return;

    const result = await refetch();

    if (result.isSuccess && result.data.success && result.data.payload) {
      const newData = handleResult(result.data);
      setDataList((prev) => uniqBy([...prev, ...newData], 'name'));
    }
  }, [handleResult, refetch]);

  return {
    dataList,
    fetchData,
    isFetching,
    isSuccess,
    onScrollEnd,
  };
};
