import { Adverts } from '@/lib';
import { InputsAdvertsFilter } from './hooks';

export type HomeProps = {
  advertCards: Adverts[];
  filters: InputsAdvertsFilter;
  page: number;
  pageSize: number;
  totalItems: number;
  searchValue?: string;
  sortValue?: string;
};
