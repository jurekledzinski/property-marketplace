import { InputsRegisterForm, usePasswordRules } from '../../hooks';
import { UseFormReturn } from 'react-hook-form';

export type RegisterFormProps = {
  controls: UseFormReturn<InputsRegisterForm, unknown, InputsRegisterForm>;
  passwordRules: ReturnType<typeof usePasswordRules>;
};
