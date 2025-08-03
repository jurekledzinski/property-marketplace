import { MouseEventHandler } from 'react';
import { Color } from '@/types';

export type ModalFooterProps = {
  cancelText?: string;
  confirmText: string;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  variant?: Color;
};
