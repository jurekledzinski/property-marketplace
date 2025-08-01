import { MouseEventHandler } from 'react';

export type BackdropProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  open: boolean;
};
