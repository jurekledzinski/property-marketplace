import { HTMLAttributes } from 'react';
import { MarginToken, PaddingToken } from '@/types';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  padding?: PaddingToken;
  margin?: MarginToken;
}
