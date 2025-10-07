import { Icons, InputVariant, Size } from '@/types';

export type PasswordInputProps = {
  disabled?: boolean;
  endIcon?: Icons;
  isError?: boolean;
  isPending?: boolean;
  label?: string;
  readOnly?: boolean;
  size?: Size;
  startIcon?: Icons;
  variant?: InputVariant;
};
