import styles from '../RadioGroup.module.css';
import { classNames } from '@/helpers';
import { Color, Size, Orientation, Spacing } from '@/types';
import { VariantRadio } from '../components';

export const getClassRadio = (
  color?: Color,
  disabled?: boolean,
  readOnly?: boolean,
  size?: Size,
  variant?: VariantRadio
) => ({
  label: classNames(
    styles.label,
    styles[size ?? ''],
    disabled ? styles['disabled'] : '',
    readOnly ? styles['read-only'] : ''
  ),
  input: classNames(styles.input),
  radioCustom: classNames(
    styles.radioCustom,
    styles[color ?? ''],
    styles[size ?? ''],
    styles[variant ?? ''],
    readOnly ? styles['read-only'] : ''
  ),
});

export const getClassRadioGroup = (
  orientation?: Orientation,
  spacing?: Spacing,
  fullWidth?: boolean
) => {
  return classNames(
    styles.radioGroup,
    styles[orientation ?? ''],
    styles[spacing ?? ''],
    fullWidth ? styles.fullWidth : ''
  );
};
