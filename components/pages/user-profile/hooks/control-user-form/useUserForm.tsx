'use client';
import { InputsUser, UseUserFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { startTransition } from 'react';
import { useResetForm } from '@/hooks';

const defaultValues = {
  name: '',
  email: '',
};

export const useUserForm = ({
  isPending,
  isSuccess,
  onFailed,
  onSubmitForm,
  onSuccess,
  user,
}: UseUserFormProps) => {
  const formControl = useForm<InputsUser>({
    defaultValues: { ...defaultValues, ...(user && { ...user }) },
  });

  const onSubmit: SubmitHandler<InputsUser> = (data) => {
    const formData = new FormData();
    formData.set('email', data.email);
    formData.set('name', data.name);
    startTransition(() => onSubmitForm(formData));
  };

  useResetForm({
    isPending,
    isSuccess,
    formControl,
    onFailed,
    onSuccess,
  });

  return { formControl, onSubmit };
};
