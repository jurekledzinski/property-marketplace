'use client';
import { formatFormData } from '@/helpers';
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
  deleteImages: [],
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
  mode,
  onSubmitForm,
  onSuccess,
}: UseAdvertFormProps) => {
  const [reset, setReset] = useState(resetState);

  const formControl = useForm<InputsAvert>({
    values: { ...defaultValues, ...(advert ?? {}), userId },
  });

  const onSubmit: SubmitHandler<InputsAvert> = useCallback(
    (data) => {
      delete data.files;
      const images = data.images.map((image) => {
        delete image.isOriginal;
        return image;
      });
      const deleteImages = (data.deleteImages || []).map((image) => {
        delete image.isOriginal;
        return image;
      });

      const formData = formatFormData({ ...data, deleteImages, images });
      startTransition(() => onSubmitForm(formData));
    },
    [onSubmitForm]
  );

  useResetForm({
    isPending,
    isSuccess,
    formControl,
    ...(mode === 'new' ? { defaultValues } : {}),
    onSuccess: () => {
      if (onSuccess) onSuccess();
      if (mode !== 'new') return;
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
