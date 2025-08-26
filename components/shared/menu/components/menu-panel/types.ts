import { Color, Size } from '@/types';
import { CommonPanelProps, Placement } from '@/components';
import { HTMLAttributes } from 'react';

type Panel = Omit<HTMLAttributes<HTMLDivElement>, 'id'>;

export interface MenuPanelProps extends Panel, CommonPanelProps {
  arrowColor?: Color | 'default';
  arrowPlacement?: Placement;
  arrowSize?: Size;
  arrowGap?: number;
  type?: 'floating' | 'expand' | 'slide';
}
