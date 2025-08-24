import { InputsRegister, usePasswordRules } from '../../hooks';
import {
  FieldErrors,
  FieldValues,
  Path,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

export type RegisterFormProps<T extends FieldValues> = {
  controls: UseFormReturn<T, unknown, T>;
  errors: FieldErrors<InputsRegister>;
  nameName: Path<T>;
  nameEmail: Path<T>;
  namePassword: Path<T>;
  nameConfirm: Path<T>;
  passwordRules: ReturnType<typeof usePasswordRules<T>>;
  onSubmit: SubmitHandler<T>;
};
