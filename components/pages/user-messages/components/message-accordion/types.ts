import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Messages } from '@/lib';

export type MessageAccordionProps = {
  openIds: string[];
  message?: Messages;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onSelect?: ChangeEventHandler<HTMLInputElement>;
};
