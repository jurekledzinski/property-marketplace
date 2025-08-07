import { HTMLAttributes } from 'react';
import {
  MarginBottomToken,
  MarginLeftToken,
  MarginRightToken,
  MarginToken,
  MarginTopToken,
  PaddingBottomToken,
  PaddingLeftToken,
  PaddingRightToken,
  PaddingToken,
  PaddingTopToken,
} from '@/types';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
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
