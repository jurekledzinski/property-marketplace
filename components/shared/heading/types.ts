import { HTMLAttributes } from 'react';

export type FontWeightClass =
  | 'fw-100'
  | 'fw-200'
  | 'fw-300'
  | 'fw-400'
  | 'fw-500'
  | 'fw-600'
  | 'fw-700'
  | 'fw-800'
  | 'fw-900';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fw?: FontWeightClass;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
