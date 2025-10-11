import { Adverts, Countries } from '@/services';
import { InputsAdvertsFilter } from '../../hooks';

export type AdvertsLayoutProps = {
  advertCards: Adverts[];
  countries: Countries;
  filters: InputsAdvertsFilter;
  page: number;
  pageSize: number;
  totalItems: number;
  queryParams?: string;
  searchValue?: string;
  sortValue?: string;
};
