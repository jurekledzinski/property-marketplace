import { Icons, InputVariant, Size } from '@/types';

export type PasswordInputProps = {
  disabled?: boolean;
  readOnly?: boolean;
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  startIcon?: Icons;
  size?: Size;
  variant?: InputVariant;
  label?: string;
};
