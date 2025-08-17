'use client';
import { InputsContact, useContactFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';

const defaultValues = {
  name: '',
  email: '',
  message: '',
};

export const useContactForm = ({ advertiserId }: useContactFormProps) => {
  const formControls = useForm<InputsContact>({ defaultValues });

  const onSubmit: SubmitHandler<InputsContact> = (data) => {
    console.log('Submit contact', data, advertiserId);
  };

  return { formControls, onSubmit };
};
