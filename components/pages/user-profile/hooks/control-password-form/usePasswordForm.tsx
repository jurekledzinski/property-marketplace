'use client';
import { startTransition } from 'react';
import { InputsPassword, UsePasswordFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useResetForm } from '@/hooks';

const defaultValues = {
  password: '',
  confirm: '',
};

export const usePasswordForm = ({
  isPending,
  isSuccess,
  onFailed,
  onSubmitForm,
  onSuccess,
}: UsePasswordFormProps) => {
  const formControl = useForm<InputsPassword>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<InputsPassword> = (data) => {
    const formData = new FormData();
    formData.set('password', data.password);
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
