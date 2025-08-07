import {
  Aligment,
  Justify,
  MarginBottomToken,
  MarginLeftToken,
  MarginRightToken,
  MarginToken,
  MarginTopToken,
  Orientation,
  PaddingBottomToken,
  PaddingLeftToken,
  PaddingRightToken,
  PaddingToken,
  PaddingTopToken,
  Spacing,
} from '@/types';

export type ButtonGroupProps = {
  children: React.ReactNode;
  aligment?: Aligment;
  fullWidth?: boolean;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: Spacing;
  mt?: MarginTopToken;
  mb?: MarginBottomToken;
  mr?: MarginRightToken;
  ml?: MarginLeftToken;
  m?: MarginToken;
  p?: PaddingToken;
  pt?: PaddingTopToken;
  pb?: PaddingBottomToken;
  pr?: PaddingRightToken;
  pl?: PaddingLeftToken;
};
