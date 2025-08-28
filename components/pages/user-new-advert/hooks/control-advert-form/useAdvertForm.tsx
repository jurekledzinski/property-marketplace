'use client';
import { InputsAvert, UseAdvertFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';

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
  images: [],
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
  dbImages: [],
  deleteImagesIds: [],
};

export const useAdvertForm = ({ advert, userId }: UseAdvertFormProps) => {
  const formControl = useForm<InputsAvert>({
    defaultValues: {
      advertiser: advert?.advertiser ?? defaultValues.advertiser,
      userId: userId,
      email: advert?.email ?? defaultValues.email,
      phone: advert?.phone ?? defaultValues.phone,
      country: advert?.country ?? defaultValues.country,
      state: advert?.state ?? defaultValues.state,
      city: advert?.city ?? defaultValues.city,
      street: advert?.street ?? defaultValues.street,
      postalCode: advert?.postalCode ?? defaultValues.postalCode,
      title: advert?.title ?? defaultValues.title,
      description: advert?.description ?? defaultValues.description,
      images: advert?.images ?? defaultValues.images,
      type: advert?.type ?? defaultValues.type,
      status: advert?.status ?? defaultValues.status,
      price: advert?.price ?? defaultValues.price,
      condition: advert?.condition ?? defaultValues.condition,
      year: advert?.year ?? defaultValues.year,
      area: advert?.area ?? defaultValues.area,
      rooms: advert?.rooms ?? defaultValues.rooms,
      bathrooms: advert?.bathrooms ?? defaultValues.bathrooms,
      style: advert?.style ?? defaultValues.style,
      amenities: advert?.amenities ?? defaultValues.amenities,
      dbImages: advert?.dbImages ?? defaultValues.dbImages,
      deleteImagesIds: advert?.deleteImagesIds ?? defaultValues.deleteImagesIds,
    },
  });

  const onSubmit: SubmitHandler<InputsAvert> = useCallback((data) => {
    console.log('Submit advert', data);
    // deleteImagesIds można dodać podczas nowego ponieważ jest opcjonalne i musi być w edycji
  }, []);

  return { formControl, onSubmit };
};
