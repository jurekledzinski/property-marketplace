import { HTMLAttributes } from 'react';

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  zIndex?: number;
}
