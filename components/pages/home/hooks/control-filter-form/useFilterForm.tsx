'use client';
import { InputsAdvertsFilter, UseFilterFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { removeNonDigitsObj } from '@/helpers';

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
};

const resetState = {
  amenities: uuidv4(),
  architecture: uuidv4(),
  details: uuidv4(),
  location: uuidv4(),
  price: uuidv4(),
  type: uuidv4(),
};

export const useFilterForm = ({
  filters,
  onClear,
  onClearAll,
  setQueryObject,
}: UseFilterFormProps) => {
  const [reset, setReset] = useState(resetState);
  const stableControls = useForm<InputsAdvertsFilter>({
    defaultValues: {
      ...defaultValues,
      ...filters,
    },
  });

  const formControl = useMemo(() => stableControls, [stableControls]);

  const onResetAllFilters = () => {
    formControl.reset(defaultValues);
    setReset({
      amenities: uuidv4(),
      architecture: uuidv4(),
      details: uuidv4(),
      location: uuidv4(),
      price: uuidv4(),
      type: uuidv4(),
    });
    onClearAll(Object.keys(defaultValues));
  };

  const onResetFilter = (key: string, value: string) => {
    const keyInput = key as keyof InputsAdvertsFilter;
    const currentValue = formControl.getValues(keyInput);

    if (Array.isArray(currentValue)) {
      const updated = currentValue.filter((item) => item !== value);
      formControl.setValue(keyInput, updated, { shouldDirty: false });
    } else {
      formControl.resetField(keyInput);
    }

    setReset((prev) => ({ ...prev, [key]: uuidv4() }));
    onClear(key, value);
  };

  const onSubmit: SubmitHandler<InputsAdvertsFilter> = useCallback(
    (data) => {
      const formatedData = removeNonDigitsObj(data, ['priceFrom', 'priceTo']);
      setQueryObject(formatedData);
    },
    [setQueryObject]
  );

  return {
    formControl,
    onResetFilter,
    onResetAllFilters,
    reset,
    onSubmit,
  };
};
