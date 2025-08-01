import styles from '../Heading.module.css';
import { ClassesHeading } from './types';
import { classNames, generateClassNames } from '@/helpers';

export const getClassesHeading: ClassesHeading = (params) => {
  const { className, fw, level } = params;

  return classNames(
    generateClassNames(styles, {
      [`${fw}`]: Boolean(fw),
      [`h${level}`]: Boolean(level),
    }),
    className ?? ''
  );
};
