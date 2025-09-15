'use client';
import { useResetForm } from '@/hooks';
import { InputsContact, useContactFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { startTransition } from 'react';

const defaultValues = {
  name: '',
  email: '',
  message: '',
  title: '',
};

export const useContactForm = ({
  isPending,
  isSuccess,
  onFailed,
  onSubmitForm,
  onSuccess,
  userId,
}: useContactFormProps) => {
  const formControl = useForm<InputsContact>({ defaultValues });

  const onSubmit: SubmitHandler<InputsContact> = (data) => {
    const formData = new FormData();
    formData.set('name', data.name);
    formData.set('email', data.email);
    formData.set('message', data.message);
    formData.set('title', data.title);
    formData.set('userId', userId);

    startTransition(() => onSubmitForm(formData));
  };

  useResetForm({
    isPending,
    isSuccess,
    formControl,
    defaultValues,
    onFailed,
    onSuccess,
  });

  return { formControl, onSubmit };
};
