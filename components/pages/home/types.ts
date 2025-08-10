import { InputsAdvertsFilter } from './hooks';

// export type PartialAdvertsFilters = Partial<InputsAdvertsFilter>;

export type PartialAdvertsFilters = InputsAdvertsFilter;

export type HomeProps = {
  searchValue?: string;
  sortValue?: string;
  filters: PartialAdvertsFilters;
};
