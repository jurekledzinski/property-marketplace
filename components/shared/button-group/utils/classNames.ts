import styles from '../ButtonGroup.module.css';
import stylesSpace from '@/styles/space.module.css';
import { classNames, generateClassNames, spacingClasses } from '@/utils-client';
import { GetClassButtonGroup } from './types';

export const getClassButtonGroup: GetClassButtonGroup = (params) => {
  const { aligment, justify, fullWidth, orientation, spacing, ...rest } =
    params;

  const spaceClasses = spacingClasses(rest);

  const mergeStyles = { ...styles, ...stylesSpace };

  return classNames(
    styles['button-group'],
    generateClassNames(mergeStyles, {
      [`${aligment}`]: Boolean(aligment),
      [`full-width`]: Boolean(fullWidth),
      [`${justify}`]: Boolean(justify),
      [`${orientation}`]: Boolean(orientation),
      [`${spacing}`]: Boolean(spacing),
      ...spaceClasses,
    })
  );
};
