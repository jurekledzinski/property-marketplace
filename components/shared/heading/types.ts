import { FontWeightClass, MarginToken, PaddingToken } from '@/types';
import { HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fw?: FontWeightClass;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  padding?: PaddingToken;
  margin?: MarginToken;
}
