import styles from '../CheckboxGroup.module.css';
import { classNames } from '@/utils-client';
import { Orientation, Spacing } from '@/types';

export const getClassCheckboxGroup = (
  orientation?: Orientation,
  spacing?: Spacing,
  fullWidth?: boolean
) => {
  return classNames(
    styles.checkboxGroup,
    styles[orientation ?? ''],
    styles[spacing ?? ''],
    fullWidth ? styles.fullWidth : ''
  );
};
