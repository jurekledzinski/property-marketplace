'use client';
import { useEffect, useMemo } from 'react';
import { UseAdvertInitialValuesProps } from './types';

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
  userId: '',
};

export const useAdvertInitialValues = ({
  advert,
  draft,
  userId,
  onSetDeleteImages,
}: UseAdvertInitialValuesProps) => {
  const initialValues = useMemo(() => {
    return {
      ...defaultValues,
      ...(advert ?? {}),
      ...(draft.images ? { images: draft.images } : {}),
      userId,
    };
  }, [advert, draft, userId]);

  const initialDeleteImages = useMemo(() => draft.deleteImages || [], [draft]);

  useEffect(() => {
    if (!initialDeleteImages) return;
    onSetDeleteImages(initialDeleteImages);
  }, [initialDeleteImages, onSetDeleteImages]);

  return { defaultValues, initialValues, initialDeleteImages };
};
