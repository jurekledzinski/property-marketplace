import styles from '../Container.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesContainer } from './types';
import { classNames, generateClassNames } from '@/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const { className, margin, maxWidth, padding } = params;

  const mergedClasses = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergedClasses, {
      container: true,
      [`${margin}`]: Boolean(margin),
      [`${maxWidth}`]: Boolean(maxWidth),
      [`${padding}`]: Boolean(padding),
    }),
    className ?? ''
  );
};
