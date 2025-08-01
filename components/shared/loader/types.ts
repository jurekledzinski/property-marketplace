import { Border, Size } from '@/types';
import { HTMLAttributes } from 'react';

export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  border?: Border;
  colorTrack?: string;
  colorSpin?: string;
  size?: Size | 'size-xxs' | number;
  position?: 'element' | 'viewport';
}
