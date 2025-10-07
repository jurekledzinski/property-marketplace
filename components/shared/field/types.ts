import { GapToken } from '@/types';
import { HTMLAttributes } from 'react';

export interface FiledProps extends HTMLAttributes<HTMLFieldSetElement> {
  gap?: GapToken;
}
