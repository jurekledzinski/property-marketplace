import styles from '../Heading.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesHeading } from './types';
import { classNames, generateClassNames } from '@/helpers';

export const getClassesHeading: ClassesHeading = (params) => {
  const { className, fw, level, margin, padding } = params;

  const mergedClasses = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergedClasses, {
      [`${fw}`]: Boolean(fw),
      [`h${level}`]: Boolean(level),
      [`${margin}`]: Boolean(margin),
      [`${padding}`]: Boolean(padding),
    }),
    className ?? ''
  );
};
