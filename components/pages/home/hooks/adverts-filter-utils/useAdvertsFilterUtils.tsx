import { MouseEvent, useCallback, useMemo } from 'react';
import { UseAdvertsFilterUtilsProps } from './types';

const locationGroup = ['country', 'state', 'city'];

export const useAdvertsFilterUtils = ({
  filters,
  form,
}: UseAdvertsFilterUtilsProps) => {
  const watchForm = form.formControl.watch();

  const isFormFilled = useMemo(() => {
    return Object.values(watchForm).some((item) => item?.length);
  }, [watchForm]);

  const areFiltersEmpty = useMemo(() => {
    return Object.values(filters).some((item) => item?.length);
  }, [filters]);

  const onDelete = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const { name, id: value } = e.currentTarget;

      if (locationGroup.includes(name)) {
        const index = locationGroup.indexOf(name);
        const group = locationGroup.slice(index);
        return form.onResetSomeFilters(group);
      }

      form.onResetFilter(name, value);
    },
    [form]
  );

  return { isFormFilled, areFiltersEmpty, onDelete };
};
