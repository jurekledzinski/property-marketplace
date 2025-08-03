import { Color, Size } from '@/types';
import { InputHTMLAttributes } from 'react';

export type VariantRadio = 'filled' | 'outlined';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  chilren?: React.ReactNode;
  color?: Color;
  size?: Size;
  variant?: VariantRadio;
}
