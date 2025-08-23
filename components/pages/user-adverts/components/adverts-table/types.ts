import { Table } from '@tanstack/react-table';

export type AdvertsTableTableProps<T extends object> = {
  table: Table<T>;
  children?: (table: Table<T>) => React.ReactNode;
  emptyMessage?: string;
  isEmpty?: boolean;
  noResults?: boolean;
  noResultsMessage?: string;
  loading?: boolean;
};

export type AdvertsUser = {
  id: string;
  userId: string;
  title: string;
  type: string;
  stage: string;
  createdAt: number;
  actions: string;
};
