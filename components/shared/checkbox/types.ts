import { Color, Size } from '@/types';
import { InputHTMLAttributes } from 'react';

export type VariantCheckbox = 'filled' | 'unfilled';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  chilren?: React.ReactNode;
  classNameLabel?: string;
  color?: Color;
  size?: Size;
  variant?: VariantCheckbox;
}
