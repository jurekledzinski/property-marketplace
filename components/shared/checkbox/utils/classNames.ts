import styles from '../Checkbox.module.css';
import { classNames, generateClassNames } from '@/helpers';
import { GetClassNamesCheckbox, GetClassNamesLabelCheckbox } from './types';

export const getClassNamesLabel: GetClassNamesLabelCheckbox = ({
  classNameLabel,
  disabled,
  readOnly,
  size,
}) =>
  classNames(
    generateClassNames(styles, {
      label: true,
      disabled: Boolean(disabled),
      readOnly: Boolean(readOnly),
      [`${size}`]: Boolean(size),
    }),
    classNameLabel || ''
  );

export const getClassNamesCheckbox: GetClassNamesCheckbox = ({
  className,
  color,
  readOnly,
  size,
  variant,
}) =>
  classNames(
    generateClassNames(styles, {
      checkbox: true,
      readOnly: Boolean(readOnly),
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
    className || ''
  );
