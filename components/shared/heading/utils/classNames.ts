import styles from '../Heading.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesHeading } from './types';
import { classNames, generateClassNames, spacingClasses } from '@/utils-client';

export const getClassNamesHeading: ClassesHeading = (params) => {
  const { className, fw, level, m, mb, mt, ml, mr, p, pb, pl, pr, pt } = params;

  const mergedClasses = { ...styles, ...stylesSpace };

  const spacing = spacingClasses({ m, mb, ml, mr, mt, p, pb, pl, pr, pt });

  return classNames(
    generateClassNames(mergedClasses, {
      [`${fw}`]: Boolean(fw),
      [`h${level}`]: Boolean(level),
      ...spacing,
    }),
    className ?? ''
  );
};
