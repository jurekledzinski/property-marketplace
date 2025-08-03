import { Color } from '@/types';
import { MouseEventHandler } from 'react';

export type ModalHeaderProps = {
  title: string;
  variant?: Color;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};
