import { Adverts } from '@/lib';
import { InputsAdvertsFilter } from '../../hooks';

export type AdvertsLayoutProps = {
  advertCards: Adverts[];
  filters: InputsAdvertsFilter;
  searchValue?: string;
  sortValue?: string;
};
