'use client';
import { DeleteImages, InputsAvert, UseAdvertFormProps } from './types';
import { formatFormData } from '@/helpers';
import { startTransition, useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAdvertInitialValues } from '../advert-initial-values';
import { useResetForm } from '@/hooks';

export const useAdvertForm = ({
  advert,
  draft,
  isPending,
  isSuccess,
  mode,
  onSubmitForm,
  onFailed,
  onSuccess,
}: UseAdvertFormProps) => {
  const [deletedImages, setDeletedImages] = useState<DeleteImages>(
    draft.deleteImages ?? []
  );

  const { defaultValues, initialValues } = useAdvertInitialValues({
    draft,
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
    onFailed,
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
  });

  useEffect(() => {
    if (!initialValues.images) return;
    formControl.reset(initialValues);
  }, [formControl, initialValues]);

  const onSetDeleteImages = (images: DeleteImages = []) => {
    setDeletedImages(images);
  };

  return { deletedImages, formControl, onSetDeleteImages, onSubmit };
};
