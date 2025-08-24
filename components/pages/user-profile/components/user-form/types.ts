import { InputsUser } from '../../hooks';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type UserFormProps = {
  controls: UseFormReturn<InputsUser, unknown, InputsUser>;
  onSubmit: SubmitHandler<InputsUser>;
};
