import { HomeProps } from '../../types';
import { PartialAdvertsFilters } from '../../types';

export type AdvertsLayoutProps = {
  advertCards: HomeProps['advertCards'];
  filters: PartialAdvertsFilters;
  searchValue?: string;
  sortValue?: string;
};
