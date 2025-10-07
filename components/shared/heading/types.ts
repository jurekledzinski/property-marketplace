import { FontWeightClass, SpacingToken } from '@/types';
import { HTMLAttributes } from 'react';

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    SpacingToken {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  fw?: FontWeightClass;
}
