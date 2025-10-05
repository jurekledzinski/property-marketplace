import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Messages } from '@/services';

export type MessageAccordionProps = {
  openIds: string[];
  message?: Messages;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onSelect?: ChangeEventHandler<HTMLInputElement>;
};
