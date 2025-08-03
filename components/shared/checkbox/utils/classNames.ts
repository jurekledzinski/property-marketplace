import { classNames } from '@/helpers';
import { Color, Size } from '@/types';
import styles from '../Checkbox.module.css';
import { VariantCheckbox } from '../types';

export const getClassCheckbox = (
  color?: Color,
  disabled?: boolean,
  readOnly?: boolean,
  size?: Size,
  variant?: VariantCheckbox
) => ({
  label: classNames(
    styles.label,
    styles[size ?? ''],
    disabled ? styles['disabled'] : '',
    readOnly ? styles['read-only'] : ''
  ),
  checkbox: classNames(
    styles.checkbox,
    styles[color ?? ''],
    styles[size ?? ''],
    styles[variant ?? ''],
    readOnly ? styles['read-only'] : ''
  ),
});
