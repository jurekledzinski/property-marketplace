import { InputsAdvertsFilter } from '../../hooks';
import { HomeProps } from '../../types';

export type AdvertsLayoutProps = {
  advertCards: HomeProps['advertCards'];
  filters: InputsAdvertsFilter;
  searchValue?: string;
  sortValue?: string;
};
