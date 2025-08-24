import { AdvertsUser } from '../adverts-table';
import { Table } from '@tanstack/react-table';

export type AdvertsPaginationProps = {
  amountData: number;
  currentPage: number;
  itemsPerPage: number;
  table: Table<AdvertsUser>;
};
