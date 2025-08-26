import { ButtonHTMLAttributes } from 'react';

export interface MenuTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export type GetClassNamesMenuTrigger = (fullWidth?: boolean) => string;
