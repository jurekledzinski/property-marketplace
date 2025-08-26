'use client';
import { InputsRegister } from './types';
import { useForm } from 'react-hook-form';

const defaultValues = {
  name: '',
  confirm: '',
  email: '',
  password: '',
};

export const useRegisterForm = () => {
  const formControl = useForm<InputsRegister>({
    defaultValues,
  });

  return formControl;
};
