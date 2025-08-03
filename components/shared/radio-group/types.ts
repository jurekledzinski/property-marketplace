import { Margin, Orientation, Spacing } from '@/types';

export type RadioGroupProps = {
  children?: React.ReactNode;
  fullWidth?: boolean;
  marginTop?: Margin;
  marginBottom?: Margin;
  orientation?: Orientation;
  spacing: Spacing;
};
