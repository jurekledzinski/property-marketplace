import { Aligment, Justify, Margin, Orientation, Spacing } from '@/types';

export type ButtonGroupProps = {
  children: React.ReactNode;
  aligment?: Aligment;
  fullWidth?: boolean;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: Spacing;
  marginTop?: Margin;
  marginBottom?: Margin;
};
