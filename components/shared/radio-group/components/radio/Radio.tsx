import { forwardRef, Ref } from 'react';
import { getClassRadio } from '../../utils';
import { RadioProps } from './types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { children, color, disabled, readOnly, size, variant, ...props },
    ref: Ref<HTMLInputElement>
  ) => {
    const classes = getClassRadio(color, disabled, readOnly, size, variant);

    return (
      <label className={classes.label} htmlFor={props.id}>
        <input
          ref={ref}
          className={classes.input}
          disabled={disabled}
          id={props.id}
          readOnly={readOnly}
          type="radio"
          {...props}
          onKeyDown={(e) => readOnly && e.preventDefault()}
        />
        <span className={classes.radioCustom}></span>
        {children}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
