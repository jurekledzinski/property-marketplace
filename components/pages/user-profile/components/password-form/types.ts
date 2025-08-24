import { usePasswordRules } from '@/components';
// import { InputsPassword } from '../../hooks';
import {
  FieldValues,
  Path,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

export type PasswordFormProps<T extends FieldValues> = {
  controls: UseFormReturn<T, unknown, T>;
  namePassword: Path<T>;
  nameConfirm: Path<T>;
  passwordRules: ReturnType<typeof usePasswordRules<T>>;
  onSubmit: SubmitHandler<T>;
};
