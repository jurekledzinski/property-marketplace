'use client';
import { InputsAdvertsFilter } from './types';
import { useForm } from 'react-hook-form';

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

  return formControl;
};
