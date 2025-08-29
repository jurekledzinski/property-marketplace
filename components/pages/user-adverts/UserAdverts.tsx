'use client';
import { Heading } from '@/components';
import { UserAdvertsProps } from './types';

import {
  AdvertsPagination,
  AdvertsTable,
  useAdvertsColumns,
  useControlAdvertsTable,
} from './components';

export const UserAdverts = ({ adverts = [] }: UserAdvertsProps) => {
  const columns = useAdvertsColumns({
    onDelete: (id) => {
      console.log('Delete advert id', id);
    },
  });
  const { isEmpty, noResults, table } = useControlAdvertsTable({
    adverts,
    columns,
  });

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        User adverts
      </Heading>

      <AdvertsTable
        table={table}
        isEmpty={isEmpty}
        noResults={noResults}
        loading={false}
      >
        {(table) => {
          const currentPage = table.getState().pagination.pageIndex;
          const itemsPerPage = table.getState().pagination.pageSize;
          const amountData = table.getPrePaginationRowModel().rows.length;

          return (
            <AdvertsPagination
              amountData={amountData}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              table={table}
            />
          );
        }}
      </AdvertsTable>
    </>
  );
};
