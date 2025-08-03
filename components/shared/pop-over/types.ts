import { HTMLAttributes } from 'react';

export type Alignment = 'start' | 'end';
export type BasePlacement = 'top' | 'bottom' | 'left' | 'right';

export type Placement = `${BasePlacement} ${Alignment}` | BasePlacement;

export interface PopOverProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onEnter?: () => void;
  onEntered?: () => void;
  onEntering?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  onExiting?: () => void;
}
