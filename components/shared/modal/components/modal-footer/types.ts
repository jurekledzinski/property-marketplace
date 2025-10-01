import { MouseEventHandler } from 'react';
import { Color } from '@/types';

export type ModalFooterProps = {
  confirmText: string;
  cancelText?: string;
  isPending?: boolean;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  color?: Color;
};
