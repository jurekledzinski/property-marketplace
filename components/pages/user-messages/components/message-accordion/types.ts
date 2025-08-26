import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Message } from '@/models';

export type MessageAccordionProps = {
  selectedIds: string[];
  message?: Message;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChangeDelete?: ChangeEventHandler<HTMLInputElement>;
};
