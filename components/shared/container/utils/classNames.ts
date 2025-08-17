import styles from '../Container.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesContainer } from './types';
import { classNames, generateClassNames, spacingClasses } from '@/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const {
    className,
    m,
    mb,
    ml,
    mr,
    mt,
    maxWidth = 'mw-md',
    p,
    pb,
    pl,
    pr,
    pt,
  } = params;

  const spacing = spacingClasses({
    m,
    mb,
    ml,
    mr,
    mt,
    p,
    pb,
    pl,
    pr,
    pt,
    maxWidth,
  });

  const mergedClasses = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergedClasses, {
      container: true,
      ...spacing,
    }),
    className ?? ''
  );
};
