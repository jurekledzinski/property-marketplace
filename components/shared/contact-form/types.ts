import { FormHTMLAttributes } from 'react';
import { InputsContact } from './hooks';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export interface ContactFormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  controls: UseFormReturn<InputsContact, unknown, InputsContact>;
  onSubmit: SubmitHandler<InputsContact>;
}
