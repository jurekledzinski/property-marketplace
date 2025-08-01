import styles from '../Container.module.css';
import { ClassesContainer } from './types';
import { classNames, generateClassNames } from '@/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const { className, margin, maxWidth, padding } = params;

  return classNames(
    generateClassNames(styles, {
      container: true,
      [`${margin}`]: Boolean(margin),
      [`${maxWidth}`]: Boolean(maxWidth),
      [`${padding}`]: Boolean(padding),
    }),
    className ?? ''
  );
};
