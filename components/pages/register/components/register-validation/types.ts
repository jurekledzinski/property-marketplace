import { FieldValues } from 'react-hook-form';
import { usePasswordRules } from '../../hooks';

export type RegisterValidationProps<T extends FieldValues> = {
  passwordRules: ReturnType<typeof usePasswordRules<T>>;
};
