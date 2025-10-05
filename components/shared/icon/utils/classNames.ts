import styles from '../Icon.module.css';
import { classNames } from '@/utils-client';
import { Color } from '@/types';

export const getClassIcon = (className?: string, color?: Color | 'info') => {
  return classNames(styles.icon, styles[color ?? ''], className ?? '');
};
