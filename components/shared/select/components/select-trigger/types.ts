import { Icons } from '@/types';
import { InputHTMLAttributes } from 'react';

export interface SelectTriggerProps
  extends InputHTMLAttributes<HTMLInputElement> {
  endIcon?: Icons;
}
