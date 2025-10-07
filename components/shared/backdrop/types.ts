import { HTMLAttributes } from 'react';

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  portal?: boolean;
  timeout?: number;
  zIndex?: number;
}
