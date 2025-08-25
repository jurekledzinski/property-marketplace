import { ChangeEventHandler } from 'react';
import { PaddingToken, Size } from '@/types';

export type AccordionHeaderProps = {
  checked?: boolean;
  id: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onChangeDelete?: ChangeEventHandler<HTMLInputElement>;
  p?: PaddingToken;
  size?: Size;
  title: string;
};
