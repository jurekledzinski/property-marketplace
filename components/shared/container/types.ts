import {
  MarginBottomToken,
  MarginLeftToken,
  MarginRightToken,
  MarginToken,
  MarginTopToken,
  MaxWidthToken,
  PaddingBottomToken,
  PaddingLeftToken,
  PaddingRightToken,
  PaddingToken,
  PaddingTopToken,
} from '@/types';

export interface ContainerProps {
  as?: 'div' | 'main' | 'section';
  className?: string;
  children?: React.ReactNode;
  maxWidth?: MaxWidthToken;
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
}
