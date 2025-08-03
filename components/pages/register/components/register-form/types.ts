import { InputsRegister, usePasswordRules } from '../../hooks';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type RegisterFormProps = {
  controls: UseFormReturn<InputsRegister, unknown, InputsRegister>;
  passwordRules: ReturnType<typeof usePasswordRules>;
  onSubmit: SubmitHandler<InputsRegister>;
};
