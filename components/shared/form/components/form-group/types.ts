import { GapToken, Orientation } from '@/types';
import { HTMLAttributes } from 'react';

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  gap?: GapToken;
  orientation?: Orientation;
}
