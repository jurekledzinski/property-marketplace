import { CheckboxProps } from '../../types';
import { classNames } from '@/helpers';
import { forwardRef } from 'react';
import { getClassNamesCheckbox } from '../../utils';
import { Icon } from '../icon';

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color, disabled, readOnly, size, variant, ...props }, ref) => {
    const classes = getClassNamesCheckbox({
      className,
      color,
      disabled,
      readOnly,
      size,
      variant,
    });

    return (
      <>
        <input
          {...props}
          ref={ref}
          className={classes}
          disabled={disabled}
          id={props.id}
          readOnly={readOnly}
          type="checkbox"
          onKeyDown={(e) => readOnly && e.preventDefault()}
        />
        <Icon className={classNames(classes, className)} />
      </>
    );
  }
);

CheckboxInput.displayName = 'CheckboxInput';
