import { Adverts, Countries } from '@/lib';
import { InputsAdvertsFilter } from '../../hooks';

export type AdvertsLayoutProps = {
  advertCards: Adverts[];
  countries: Countries;
  filters: InputsAdvertsFilter;
  page: number;
  pageSize: number;
  totalItems: number;
  searchValue?: string;
  sortValue?: string;
};
