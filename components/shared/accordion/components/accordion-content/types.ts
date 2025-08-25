import {
  PaddingBottomToken,
  PaddingLeftToken,
  PaddingRightToken,
  PaddingToken,
  PaddingTopToken,
  Size,
} from '@/types';

export type AccordionContentProps = {
  active: boolean;
  children?: React.ReactNode;
  className?: string;
  p?: PaddingToken;
  pt?: PaddingTopToken;
  pb?: PaddingBottomToken;
  pl?: PaddingLeftToken;
  pr?: PaddingRightToken;
  size?: Size;
};
