import styles from '../Button.module.css';
import { BaseButtonProps } from '../types';
import { classNames } from '@/utils-client';

export const getClassButton = ({
  border = 'border-xs',
  color = 'primary',
  size = 'size-md',
  variant = 'contained',
  ...params
}: Omit<BaseButtonProps, 'iconEnd' | 'iconStart' | 'label'>) => {
  const defaultValues = { border, color, size, variant };
  const stylesValues = Object.values({
    ...params,
    ...defaultValues,
  });

  return classNames(
    styles.button,
    ...stylesValues.map((key) => styles[key as keyof typeof styles]),
    params.disabled || params.isLoading ? styles.disabled : '',
    params.fullWidth ? styles.fullWidth : ''
  );
};
