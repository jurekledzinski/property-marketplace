import { Color, Variant } from '@/types';
import { MouseEventHandler } from 'react';

export type AccordionProps = {
  children: React.ReactNode;
  open: boolean;
  color?: Color;
  id?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  variant?: Variant;
};
