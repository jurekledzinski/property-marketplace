import stylesSpace from '@/styles/space.module.css';
import { ClassesBox } from './types';
import { classNames, generateClassNames } from '@/helpers';

export const getClassesBox: ClassesBox = (params) => {
  const { className, margin, padding } = params;

  return classNames(
    className ?? '',
    generateClassNames(stylesSpace, {
      [`${margin}`]: Boolean(margin),
      [`${padding}`]: Boolean(padding),
    })
  );
};
