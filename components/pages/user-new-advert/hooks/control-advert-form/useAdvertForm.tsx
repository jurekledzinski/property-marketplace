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
      ...(advert ?? {}),
      userId,
    },
  });

  const onSubmit: SubmitHandler<InputsAvert> = useCallback(
    (data) => {
      delete data.files;
      //   console.log('submit ADVERT', data);
      const formData = new FormData();

      //   Nie wysyłaj files do action

      for (const key in data) {
        const value = data[key as keyof InputsAvert];

        if (typeof value === 'string') {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          if (value[0] && value[0] instanceof File) {
            // console.log('key 1', key);
            value.forEach((file) => {
              if (file instanceof File) formData.append(key, file);
            });
          } else if (
            value[0] &&
            typeof value[0] === 'object' &&
            'url' in value[0] &&
            'fileId' in value[0]
          ) {
            // console.log('key 2', key);
            formData.append(key, JSON.stringify(value));
          } else {
            // console.log('key 3', key);
            formData.append(key, JSON.stringify(value));
          }
        }
      }

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
