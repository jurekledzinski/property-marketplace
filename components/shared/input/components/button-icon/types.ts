import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@/types';

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon | string;
}
