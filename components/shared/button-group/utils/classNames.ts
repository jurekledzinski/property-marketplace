import styles from '../ButtonGroup.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { GetClassButtonGroup } from './types';

export const getClassButtonGroup: GetClassButtonGroup = (params) => {
  const { aligment, justify, fullWidth, orientation, spacing } = params;
  return classNames(
    styles['button-group'],
    generateClassNames(styles, {
      [`${aligment}`]: Boolean(aligment),
      [`${justify}`]: Boolean(justify),
      [`${orientation}`]: Boolean(orientation),
      [`${spacing}`]: Boolean(spacing),
      [`full-width`]: Boolean(fullWidth),
    })
  );
};
