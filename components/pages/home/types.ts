import { Adverts } from '@/lib';
import { InputsAdvertsFilter } from './hooks';

export type HomeProps = {
  advertCards: Adverts[];
  filters: InputsAdvertsFilter;
  searchValue?: string;
  sortValue?: string;
};
