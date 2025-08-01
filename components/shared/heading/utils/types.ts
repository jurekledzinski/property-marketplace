import { FontWeightClass, HeadingProps } from '../types';

type Params = {
  className?: string;
  fw?: FontWeightClass;
  level?: HeadingProps['level'];
};

export type ClassesHeading = (params: Params) => string;
