'use client';
import { UserAdvertsProps } from './types';
import {
  Heading,
  Pagination,
  PaginationArrow,
  PaginationInfo,
} from '@/components';
import {
  AdvertsTable,
  useAdvertsColumns,
  useControlAdvertsTable,
} from './components';
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export const UserAdverts = ({ adverts = [] }: UserAdvertsProps) => {
  const columns = useAdvertsColumns();
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
            <Pagination
              size="size-sm"
              spacing="tight"
              totalPages={table.getPageCount()}
              variant="outlined"
            >
              <PaginationArrow
                id="first"
                label={faAnglesLeft}
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              />
              <PaginationArrow
                id="prev"
                label={faChevronLeft}
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              />
              <PaginationInfo
                indexStart={currentPage * itemsPerPage + 1}
                indexEnd={Math.min(
                  (currentPage + 1) * itemsPerPage,
                  amountData
                )}
                totalAmount={amountData}
              />
              <PaginationArrow
                id="next"
                label={faChevronRight}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              />
              <PaginationArrow
                id="last"
                label={faAnglesRight}
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              />
            </Pagination>
          );
        }}
      </AdvertsTable>
    </>
  );
};
