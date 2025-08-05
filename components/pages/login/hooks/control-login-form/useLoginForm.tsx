'use client';
import { InputsLogin } from './types';
import { useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const formControl = useForm<InputsLogin>({
    defaultValues,
  });

  return formControl;
};
