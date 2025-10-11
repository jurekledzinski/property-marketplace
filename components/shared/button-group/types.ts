import { Aligment, Justify, Orientation, Spacing, SpacingToken } from '@/types';

export interface ButtonGroupProps extends SpacingToken {
  children: React.ReactNode;
  aligment?: Aligment;
  fullWidth?: boolean;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: Spacing;
}
