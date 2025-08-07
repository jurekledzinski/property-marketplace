import { Icons, InputVariant, Size } from '@/types';
import { InputHTMLAttributes } from 'react';

type BasedProps = {
  endIcon?: Icons | string;
  isError?: boolean;
  isPending?: boolean;
  size?: Size;
  startIcon?: Icons;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  variant?: InputVariant;
  label?: string;
};

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  as?: 'input';
  type?: 'email' | 'number' | 'text';
}

export type SearchInputProps = BasedProps & InputProps;
