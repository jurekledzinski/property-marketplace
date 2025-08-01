import styles from '../Icon.module.css';
import { classNames } from '@/helpers';
import { Color } from '@/types';

export const getClassIcon = (className?: string, color?: Color | 'info') => {
  return classNames(styles.icon, styles[color ?? ''], className ?? '');
};
