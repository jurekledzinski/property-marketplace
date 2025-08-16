import styles from '../Container.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesContainer } from './types';
import { classNames, generateClassNames, spacingClasses } from '@/helpers';

export const getClassesContainer: ClassesContainer = (params) => {
  const { className, m, mb, ml, mr, mt, maxWidth, p, pb, pl, pr, pt } = params;

  const mergedClasses = { ...styles, ...stylesSpace };

  const spacing = spacingClasses({ m, mb, ml, mr, mt, p, pb, pl, pr, pt });

  return classNames(
    generateClassNames(mergedClasses, {
      container: true,
      [`${maxWidth}`]: Boolean(maxWidth),
      ...spacing,
    }),
    className ?? ''
  );
};
