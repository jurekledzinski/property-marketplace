import stylesSpace from '@/styles/space.module.css';
import { ClassesBox } from './types';
import { classNames, generateClassNames, spacingClasses } from '@/helpers';

export const getClassesBox: ClassesBox = (params) => {
  const { className, m, mb, mt, ml, mr, p, pb, pl, pr, pt } = params;

  const spacing = spacingClasses({ m, mb, ml, mr, mt, p, pb, pl, pr, pt });

  return classNames(generateClassNames(stylesSpace, spacing), className ?? '');
};
