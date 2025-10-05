import { ReactNode } from 'react';
import { Size, SpacingToken } from '@/types';

export interface AccordionHeaderProps extends SpacingToken {
  children?: ReactNode;
  size?: Size;
}
