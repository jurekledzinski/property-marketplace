import { Color } from '@/types';
import { MouseEventHandler } from 'react';
import { Variant } from '../../types';

export type ModalHeaderProps = {
  title: string;
  color?: Color;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
};
