import { CheckboxInput } from './components';
import { CheckboxProps } from './types';
import { forwardRef } from 'react';
import { getClassNamesLabel } from './utils';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, classNameLabel, disabled, readOnly, size, ...props }, ref) => {
    const classes = getClassNamesLabel({
      classNameLabel,
      disabled,
      readOnly,
      size,
    });

    return (
      <label className={classes} htmlFor={props.id}>
        <CheckboxInput {...{ ...props, disabled, readOnly, size }} ref={ref} />
        {children}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
