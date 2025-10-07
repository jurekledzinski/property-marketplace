import { Color, Icon, Radius, Size, Variant } from '@/types';
import { HTMLAttributes, MouseEventHandler } from 'react';

type ChipVariant = Exclude<Variant, 'text'>;

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  color?: Color;
  deleteIcon?: Icon;
  name?: string;
  label?: React.ReactNode;
  radius?: Radius;
  size?: Size;
  startIcon?: Icon;
  startIconSrc?: string;
  variant?: ChipVariant;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
}
