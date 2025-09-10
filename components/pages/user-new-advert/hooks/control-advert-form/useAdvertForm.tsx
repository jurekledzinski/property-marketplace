'use client';
import { DeleteImages, InputsAvert, UseAdvertFormProps } from './types';
import { formatFormData } from '@/helpers';
import { startTransition, useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAdvertInitialValues } from '../advert-initial-values';
import { useResetForm } from '@/hooks';
import { v4 as uuidv4 } from 'uuid';

const resetState = {
  personal: uuidv4(),
  description: uuidv4(),
  bathrooms: uuidv4(),
  amenities: uuidv4(),
};

export const useAdvertForm = ({
  advert,
  draft,
  userId,
  isPending,
  isSuccess,
  mode,
  onSubmitForm,
  onSuccess,
}: UseAdvertFormProps) => {
  const [reset, setReset] = useState(resetState);
  const [deletedImages, setDeletedImages] = useState<DeleteImages>(
    draft.deleteImages ?? []
  );

  const { defaultValues, initialValues } = useAdvertInitialValues({
    draft,
    userId,
    advert,
    onSetDeleteImages: useCallback((data) => {
      setDeletedImages(data);
    }, []),
  });

  const formControl = useForm<InputsAvert>({
    defaultValues: { ...initialValues },
  });

  const onSubmit: SubmitHandler<InputsAvert> = useCallback(
    (data) => {
      delete data.files;
      const images = data.images.map((image) => {
        delete image.isOriginal;
        return image;
      });
      const deleteImages = (deletedImages || []).map((image) => {
        delete image.isOriginal;
        return image;
      });

      const formData = formatFormData({ ...data, deleteImages, images });
      startTransition(() => onSubmitForm(formData));
    },
    [deletedImages, onSubmitForm]
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

  useEffect(() => {
    if (!initialValues.images) return;
    formControl.reset(initialValues);
  }, [formControl, initialValues]);

  const onSetDeleteImages = (images: DeleteImages = []) => {
    setDeletedImages(images);
  };

  return { deletedImages, formControl, onSetDeleteImages, onSubmit, reset };
};
