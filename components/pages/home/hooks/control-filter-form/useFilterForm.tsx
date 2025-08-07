'use client';
import { useCallback } from 'react';
import { InputsAdvertsFilter } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';

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

export const useFilterForm = () => {
  const formControl = useForm<InputsAdvertsFilter>({
    defaultValues,
  });

  const onResetAllFilters = () => formControl.reset();

  const onResetFilter = <K extends keyof InputsAdvertsFilter>(key: K) =>
    formControl.reset({ [key]: undefined });

  const onSubmit: SubmitHandler<InputsAdvertsFilter> = useCallback((data) => {
    console.log('Submit', data);
  }, []);

  return { formControl, onSubmit, onResetFilter, onResetAllFilters };
};
