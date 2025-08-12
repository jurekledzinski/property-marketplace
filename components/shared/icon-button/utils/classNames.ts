import styles from '../IconButton.module.css';
import { classNames } from '@/helpers';
import { getBackgroundConstrast } from './helpers';
import { IconBaseButtonProps } from '../types';

export const getClassIconButton = ({
  border = 'border-xs',
  className,
  color,
  size = 'size-md',
  variant = 'contained',
  ...params
}: Omit<IconBaseButtonProps, 'icon'>) => {
  const defaultValues = { border, color, size, variant };
  const stylesValues = Object.values({
    ...params,
    ...defaultValues,
  });

  return classNames(
    styles.iconButton,
    ...stylesValues.map((key) => styles[(key as keyof typeof styles) ?? '']),
    params.contrast ? styles[getBackgroundConstrast(color)] : '',
    params.disabled || params.isLoading ? styles.disabled : '',
    params.fullWidth ? styles.fullWidth : '',
    className ?? ''
  );
};
