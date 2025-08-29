'use client';
import { InputsAvert, UseAdvertFormProps } from './types';
import { startTransition, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useResetForm } from '@/hooks';
import { v4 as uuidv4 } from 'uuid';

const defaultValues = {
  advertiser: '',
  email: '',
  phone: '',
  country: '',
  state: '',
  city: '',
  street: '',
  postalCode: '',
  title: '',
  description: '',
  files: [],
  type: '', // apartment | house
  status: '', // rent | sale
  price: '',
  condition: '',
  year: '',
  area: '',
  rooms: '',
  bathrooms: '',
  amenities: [],
  style: '',
  images: [],
  deleteImagesIds: [],
  userId: '',
};

const resetState = {
  personal: uuidv4(),
  description: uuidv4(),
  bathrooms: uuidv4(),
  amenities: uuidv4(),
};

export const useAdvertForm = ({
  advert,
  userId,
  isPending,
  isSuccess,
  onSubmitForm,
}: UseAdvertFormProps) => {
  const [reset, setReset] = useState(resetState);

  const formControl = useForm<InputsAvert>({
    defaultValues: {
      ...defaultValues,
      ...advert,
      userId,
    },
  });

  console.log('add form', formControl.watch());

  const onSubmit: SubmitHandler<InputsAvert> = useCallback(
    (data) => {
      const formData = new FormData();

      for (const key in data) {
        const value = data[key as keyof InputsAvert];

        if (typeof value === 'string') {
          formData.append(key, value);
        } else if (Array.isArray(value) && value[0] instanceof File) {
          value.forEach((file) => formData.append(key, file));
        } else {
          console.log('Reszta', key);
          formData.append(key, JSON.stringify(value));
        }
      }

      console.log('SUBMIT', data);

      startTransition(() => onSubmitForm(formData));
    },
    [onSubmitForm]
  );

  useResetForm({
    isPending,
    isSuccess,
    formControl,
    defaultValues,
    onSuccess: () => {
      setReset({
        personal: uuidv4(),
        description: uuidv4(),
        bathrooms: uuidv4(),
        amenities: uuidv4(),
      });
    },
  });

  return { formControl, onSubmit, reset };
};
