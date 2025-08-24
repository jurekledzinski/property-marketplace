import { InputsUser } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';

const defaultValues = {
  name: '',
  email: '',
};

export const useUserForm = () => {
  const formControl = useForm<InputsUser>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<InputsUser> = useCallback((data) => {
    console.log('Submit user', data);
  }, []);

  return { formControl, onSubmit };
};
