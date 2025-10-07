import { Adverts, Countries } from '@/services';
import { InputsAdvertsFilter } from './hooks';

export type HomeProps = {
  advertCards: Adverts[];
  countries: Countries;
  filters: InputsAdvertsFilter;
  page: number;
  pageSize: number;
  totalItems: number;
  searchValue?: string;
  sortValue?: string;
};
