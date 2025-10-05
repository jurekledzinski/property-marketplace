import { Table } from '@tanstack/react-table';
import { UserAdvertsTable } from '@/services';

export type AdvertsPaginationProps = {
  amountData: number;
  currentPage: number;
  itemsPerPage: number;
  table: Table<UserAdvertsTable>;
};
