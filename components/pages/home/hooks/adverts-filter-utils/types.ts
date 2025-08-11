import { InputsAdvertsFilter } from '../control-filter-form';
import { useFilterForm } from '../control-filter-form';

export type UseAdvertsFilterUtilsProps = {
  form: ReturnType<typeof useFilterForm>;
  filters: InputsAdvertsFilter;
};
