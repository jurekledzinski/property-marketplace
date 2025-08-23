import { Header } from '@tanstack/react-table';
import { Icon } from '@/types';

export type SortArrowsProps<T> = {
  header: Header<T, unknown>;
  icons: Icon[];
};
