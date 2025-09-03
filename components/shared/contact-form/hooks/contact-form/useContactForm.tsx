'use client';
import { InputsContact, useContactFormProps } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';

const defaultValues = {
  name: '',
  email: '',
  message: '',
};

export const useContactForm = ({ userId }: useContactFormProps) => {
  const formControls = useForm<InputsContact>({ defaultValues });

  const onSubmit: SubmitHandler<InputsContact> = (data) => {};

  return { formControls, onSubmit };
};
