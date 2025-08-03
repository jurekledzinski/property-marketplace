import { InputsRegisterForm } from './types';
import { useForm } from 'react-hook-form';

const defaultValues = {
  name: '',
  confirm: '',
  email: '',
  password: '',
};

export const useControlRegisterForm = () => {
  const formControl = useForm<InputsRegisterForm>({
    defaultValues,
  });

  return formControl;
};
