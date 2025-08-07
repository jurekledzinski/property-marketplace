import styles from '../Input.module.css';
import { generateClassNames } from '@/helpers';
import { GetClassNamesInput, GetClassNamesInputWrapper } from './types';

export const getClassNamesInputWrapper: GetClassNamesInputWrapper = (
  params
) => {
  const {
    as,
    disabled,
    dividerStart,
    dividerEnd,
    endIcon,
    isError,
    size = 'size-md',
    readOnly,
    startIcon,
    variant = 'basic',
    isPending,
    className,
  } = params;

  return {
    inputWrapper: generateClassNames(styles, {
      wrapper: true,
      focused: Boolean(className),
      [`wrapper-${variant}`]: Boolean(variant),
      'wrapper-disabled': Boolean(disabled),
      'wrapper-inValid': isError === true,
      'wrapper-valid': isError === false,
      'wrapper-startIcon': Boolean(startIcon),
      'wrapper-endIcon': Boolean(endIcon) || Boolean(isPending),
      'wrapper-divider-end':
        (Boolean(dividerEnd) && variant === 'basic') ||
        (Boolean(dividerEnd) && variant === 'outlined'),
      'wrapper-divider-start':
        (Boolean(dividerStart) && variant === 'basic') ||
        (Boolean(dividerStart) && variant === 'outlined'),
      'wrapper-text': as === 'input',
      'wrapper-area': as === 'textarea',
    }),

    startIcon: generateClassNames(styles, {
      startIcon: true,
      [`startIcon-${size}`]: Boolean(size),
      [`startIcon-${variant}`]: Boolean(variant),
      'startIcon-disabled': Boolean(disabled),
      'startIcon-read-only': Boolean(readOnly),
    }),

    endIcon: generateClassNames(styles, {
      endIcon: true,
      [`endIcon-${size}`]: Boolean(size),
      [`endIcon-${variant}`]: Boolean(variant),
      'endIcon-disabled': Boolean(disabled),
      'endIcon-read-only': Boolean(readOnly),
    }),
    statusIcon: generateClassNames(styles, {
      endIcon: true,
      [`endIcon-${size}`]: Boolean(size),
      [`endIcon-${variant}`]: Boolean(variant),
      'endIcon-disabled': Boolean(disabled),
      'endIcon-inValid': isError === true,
      'endIcon-valid': isError === false,
    }),
  };
};

export const getClassNamesInput: GetClassNamesInput = (params) => {
  const { size = 'size-md', isError, variant = 'basic', disabled } = params;
  return {
    fieldset: generateClassNames(styles, {
      fieldset: true,
      [`fieldset-${size}`]: Boolean(size),
      [`fieldset-${variant}`]: Boolean(variant),
      'fieldset-disabled': Boolean(disabled),
    }),
    input: generateClassNames(styles, {
      input: true,
      [`input-${size}`]: Boolean(size),
      [`input-${variant}`]: Boolean(variant),
      'input-inValid': isError === true,
      'input-valid': isError === false,
    }),
    legend: generateClassNames(styles, {
      legend: true,
      [`legend-${size}`]: Boolean(size),
      [`legend-${variant}`]: Boolean(variant),
      'legend-inValid': isError === true,
      'legend-valid': isError === false,
    }),
    textarea: generateClassNames(styles, {
      textarea: true,
      [`textarea-${size}`]: Boolean(size),
      [`textarea-${variant}`]: Boolean(variant),
      'textarea-inValid': isError === true,
      'textarea-valid': isError === false,
    }),
  };
};
