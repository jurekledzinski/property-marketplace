import styles from '../Arrow.module.css';
import { generateClassNames } from '@/helpers';
import { GetClassNamesArrow } from './types';

export const getClassNamesArrow: GetClassNamesArrow = (params) => {
  const { color, placement, size } = params;

  return generateClassNames(styles, {
    arrow: true,
    [`${color}`]: Boolean(color),
    [`${placement?.split(' ')[0]}`]: Boolean(placement),
    [`${placement?.replace(/\s/, '-')}`]: Boolean(placement),
    [`${size}`]: Boolean(size),
  });
};
