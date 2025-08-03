import { ActionType, UsePaginationProps } from './types';
import { useCallback, useState } from 'react';

export const usePagination = ({
  perPage = [10],
  maxRange = 10,
  totalPages,
  onChangePage,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(perPage[0]);

  const amountButtons = Math.ceil(totalPages / itemsPerPage);
  const startValue = Math.floor(currentPage / maxRange) * maxRange;
  const endValue = Math.min(maxRange + startValue, amountButtons);

  const infoEnd = Math.min((currentPage + 1) * itemsPerPage, totalPages);
  const infoStart = currentPage * itemsPerPage + 1;

  const page = currentPage;
  const firstPage = 0;
  const lastPage = amountButtons - 1;
  const nextPage = page + 1 < amountButtons ? page + 1 : amountButtons - 1;
  const prevPage = Math.max(0, page - 1);

  const onSetPage = useCallback((page: number) => setCurrentPage(page), []);

  const onSetPerPage = useCallback(
    (value: number) => setItemsPerPage(value),
    []
  );

  const onClick = useCallback(
    (actionType: ActionType, value?: number) => {
      switch (actionType) {
        case 'first':
          onSetPage(firstPage);
          if (onChangePage) onChangePage(firstPage + 1, itemsPerPage);
          break;
        case 'last':
          onSetPage(lastPage);
          if (onChangePage) onChangePage(lastPage + 1, itemsPerPage);
          break;
        case 'next':
          onSetPage(nextPage);
          if (onChangePage) onChangePage(nextPage + 1, itemsPerPage);
          break;
        case 'prev':
          onSetPage(prevPage);
          if (onChangePage) onChangePage(prevPage + 1, itemsPerPage);
          break;
        case 'page':
          if (value === undefined) return;
          onSetPage(value);
          if (onChangePage) onChangePage(value + 1, itemsPerPage);
      }
    },
    [itemsPerPage, lastPage, nextPage, onChangePage, onSetPage, prevPage]
  );

  const rangeLength = endValue - startValue;

  const paginationItems = Array.from(
    { length: rangeLength },
    (_, i) => i + startValue
  );

  return {
    currentPage,
    infoEnd,
    infoStart,
    onClick,
    onSetPerPage,
    paginationItems,
  };
};
