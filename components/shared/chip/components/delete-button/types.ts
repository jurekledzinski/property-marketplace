import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface DeleteButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onDelete?: MouseEventHandler<HTMLButtonElement>;
}
