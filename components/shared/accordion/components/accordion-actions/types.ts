import { Icons } from '@/types';
import { MouseEventHandler } from 'react';

export type AccordionActionsProps = {
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  icons?: Icons;
};
