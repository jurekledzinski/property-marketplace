'use client';
import { InputsAdvertsFilter, UseFilterFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const defaultValues = {
  country: '',
  city: '',
  property: '',
  condition: '',
  advertisement: '',
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
  onClear,
  onClearAll,
  setQueryObject,
}: UseFilterFormProps) => {
  const [reset, setReset] = useState(resetState);
  const stableControls = useForm<InputsAdvertsFilter>({ defaultValues });

  const formControl = useMemo(() => stableControls, [stableControls]);

  const onResetAllFilters = () => {
    formControl.reset(defaultValues, { keepValues: false });
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

  const onResetFilter = <K extends keyof InputsAdvertsFilter>(key: K) => {
    formControl.reset({ [key]: undefined });
    setReset((prev) => ({ ...prev, [key]: uuidv4() }));
    onClear(key);
  };

  const onSubmit: SubmitHandler<InputsAdvertsFilter> = useCallback(
    (data) => setQueryObject(data),
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
