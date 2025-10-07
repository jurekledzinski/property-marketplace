'use client';
import { InputsLogin, UseLoginFormProps } from './types';
import { startTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useResetForm } from '@/hooks';

const defaultValues = {
  email: '',
  password: '',
};

export const useLoginForm = ({
  isPending,
  isSuccess,
  onFailed,
  onSubmitForm,
  onSuccess,
}: UseLoginFormProps) => {
  const formControl = useForm<InputsLogin>({ defaultValues });

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    const formData = new FormData();
    formData.set('email', data.email);
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
