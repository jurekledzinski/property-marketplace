import { ChangeEventHandler } from 'react';
import { Size } from '@/types';

export type AccordionSelectProps = {
  onSelect?: ChangeEventHandler<HTMLInputElement>;
  size?: Size;
};
