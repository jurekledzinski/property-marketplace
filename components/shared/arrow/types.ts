import { Placement } from '@/components';

export type Size = 'size-xs' | 'size-sm' | 'size-md' | 'size-lg';
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'negative'
  | 'warning';

export type ArrowProps = {
  color?: Color | 'default';
  gap?: number;
  placement?: Placement;
  size?: Size;
};
