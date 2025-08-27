'use client';
import { InputsRegister, UseRegisterFormProps } from './types';
import { startTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useResetForm } from '@/hooks';

const defaultValues = {
  name: '',
  confirm: '',
  email: '',
  password: '',
};

export const useRegisterForm = ({
  isPending,
  isSuccess,
  onSubmitForm,
  onSuccess,
}: UseRegisterFormProps) => {
  const formControl = useForm<InputsRegister>({ defaultValues });

  const onSubmit: SubmitHandler<InputsRegister> = (data) => {
    const formData = new FormData();
    formData.set('email', data.email);
    formData.set('name', data.name);
    formData.set('password', data.password);

    startTransition(() => onSubmitForm(formData));
  };

  useResetForm({
    isPending,
    isSuccess,
    formControl,
    defaultValues,
    onSuccess,
  });

  return { formControl, onSubmit };
};
