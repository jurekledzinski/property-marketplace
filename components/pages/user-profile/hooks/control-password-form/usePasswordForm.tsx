import { InputsPassword } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';

const defaultValues = {
  password: '',
  confirm: '',
};

export const usePasswordForm = () => {
  const formControl = useForm<InputsPassword>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<InputsPassword> = useCallback((data) => {
    console.log('Submit password', data);
  }, []);

  return { formControl, onSubmit };
};
