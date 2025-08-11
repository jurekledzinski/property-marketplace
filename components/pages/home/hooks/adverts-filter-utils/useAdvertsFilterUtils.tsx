import { MouseEvent, useCallback, useMemo } from 'react';
import { UseAdvertsFilterUtilsProps } from './types';

export const useAdvertsFilterUtils = ({
  filters,
  form,
}: UseAdvertsFilterUtilsProps) => {
  const isFormFilled = useMemo(() => {
    return Object.values(form.formControl.watch()).some((item) => item?.length);
  }, [form.formControl]);

  const areFiltersEmpty = useMemo(() => {
    return Object.values(filters).some((item) => item?.length);
  }, [filters]);

  const onDelete = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const { name, id: value } = e.currentTarget;
      form.onResetFilter(name, value);
    },
    [form]
  );

  return { isFormFilled, areFiltersEmpty, onDelete };
};
