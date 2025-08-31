import { Table } from '@tanstack/react-table';
import { UserAdvertsTable } from '@/lib';

export type AdvertsPaginationProps = {
  amountData: number;
  currentPage: number;
  itemsPerPage: number;
  table: Table<UserAdvertsTable>;
};
