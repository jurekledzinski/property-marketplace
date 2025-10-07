'use client';
import { InputsAdvertsFilter, UseFilterFormProps } from './types';
import { removeNonDigitsObj } from '@/utils-client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useMemo } from 'react';

const defaultValues = {
  country: '',
  city: '',
  type: '',
  condition: '',
  status: '',
  year: '',
  priceFrom: '',
  priceTo: '',
  area: '',
  rooms: '',
  amenities: [],
  style: '',
  state: '',
};

export const useFilterForm = ({
  filters,
  onClear,
  onClearAll,
  setQueryObject,
}: UseFilterFormProps) => {
  const stableControls = useForm<InputsAdvertsFilter>({
    defaultValues: {
      ...defaultValues,
      ...filters,
    },
  });

  const formControl = useMemo(() => stableControls, [stableControls]);

  const onResetAllFilters = () => {
    formControl.reset(defaultValues);
    onClearAll(Object.keys(defaultValues));
  };

  const onResetFilter = (key: string, value: string) => {
    const keyInput = key as keyof InputsAdvertsFilter;
    const currentValue = formControl.getValues(keyInput);

    if (Array.isArray(currentValue)) {
      const updated = currentValue.filter((item) => item !== value);
      formControl.setValue(keyInput, updated, { shouldDirty: false });
    } else {
      formControl.setValue(keyInput, defaultValues[keyInput], {
        shouldDirty: false,
      });
    }

    onClear(key, value);
  };

  const onResetSomeFilters = (keys: string[]) => {
    const arrKeys = Object.entries(keys).map((item) => [item[1], '']);
    const defaultValues = Object.fromEntries(arrKeys);
    const restValues = formControl.getValues();
    formControl.reset({ ...restValues, ...defaultValues });
    onClearAll(keys);
  };

  const onSubmit: SubmitHandler<InputsAdvertsFilter> = useCallback(
    (data) => {
      const formatedData = removeNonDigitsObj(data, ['priceFrom', 'priceTo']);
      setQueryObject({ ...formatedData, page: '1' });
    },
    [setQueryObject]
  );

  return {
    formControl,
    onResetFilter,
    onResetAllFilters,
    onResetSomeFilters,
    onSubmit,
  };
};
