import styles from '../Container.module.css';
import stylesSpace from '@/styles/space.module.css';
import { ClassesContainer } from './types';
import { classNames, generateClassNames, spacingClasses } from '@/utils-client';

export const getClassesContainer: ClassesContainer = (params) => {
  const { className, maxWidth = 'mw-md', ...rest } = params;

  const spacing = spacingClasses({ ...rest, maxWidth });
  const mergedClasses = { ...styles, ...stylesSpace };

  return classNames(
    generateClassNames(mergedClasses, {
      container: true,
      ...spacing,
    }),
    className ?? ''
  );
};
