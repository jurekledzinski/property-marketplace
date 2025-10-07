import { FormHTMLAttributes } from 'react';
import { GapToken, Orientation } from '@/types';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  gap?: GapToken;
  orientation?: Orientation;
}
