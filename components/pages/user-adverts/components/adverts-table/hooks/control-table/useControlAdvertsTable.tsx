'use client';
import { UseControlTableProps } from './types';
import { useMemo, useState } from 'react';
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowData,
  useReactTable,
} from '@tanstack/react-table';

export const useControlAdvertsTable = <T extends RowData>({
  adverts,
  columns,
}: UseControlTableProps<T>) => {
  const [data] = useState(() => [...adverts]);
  const [pagination, onPaginationChange] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 9,
  });

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: { pagination },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange,
  });

  const isEmpty = useMemo(
    () => Boolean(table.options.data.length),
    [table.options.data.length]
  );

  const noResults = useMemo(
    () => Boolean(table.getPrePaginationRowModel().rows.length),
    [table]
  );

  return { isEmpty, noResults, table };
};
