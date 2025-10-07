import { Icons, InputVariant, Size } from '@/types';
import { InputHTMLAttributes } from 'react';

export type CommonProps = {
  endIcon?: Icons | string[];
  isError?: boolean;
  isPending?: boolean;
  size?: Size;
  startIcon?: Icons;
  onClickEndIcon?: React.MouseEventHandler<HTMLSpanElement>;
  onClickStartIcon?: React.MouseEventHandler<HTMLSpanElement>;
  variant?: InputVariant;
  label?: string;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: 'input';
  type: 'email' | 'number' | 'text';
}

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  as?: 'textarea';
  type?: never;
  cols?: number;
  rows?: number;
}

export type TextInputProps = CommonProps & (InputProps | TextareaProps);
