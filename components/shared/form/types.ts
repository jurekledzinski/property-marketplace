import { FormHTMLAttributes } from 'react';
import { Orientation } from '@/types';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  orientation?: Orientation;
}
