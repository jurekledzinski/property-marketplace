import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Messages } from '@/lib';

export type MessageAccordionProps = {
  selectedIds: string[];
  message?: Messages;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChangeDelete?: ChangeEventHandler<HTMLInputElement>;
};
