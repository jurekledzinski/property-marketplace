import { forwardRef, Ref } from 'react';
import { getClassNamesInput } from './utils';
import { MergeProps, UnionElements } from './types';

export const Input = forwardRef<UnionElements, MergeProps>(
  (
    {
      as = 'input',
      disabled,
      isError,
      size = 'size-md',
      variant = 'basic',
      placeholder = '',
      ...props
    },
    ref: Ref<UnionElements>
  ) => {
    const classes = getClassNamesInput({ variant, size, isError, disabled });

    if (as === 'textarea') {
      return (
        <fieldset className={classes.fieldset}>
          <textarea
            {...props}
            ref={ref as Ref<HTMLTextAreaElement>}
            aria-label={props.label}
            className={classes.textarea}
            disabled={disabled}
            placeholder={placeholder}
            required
          />

          {variant !== 'basic' && (
            <legend className={classes.legend}>{props.label}</legend>
          )}
        </fieldset>
      );
    }

    return (
      <fieldset className={classes.fieldset}>
        <input
          {...{
            type: 'text',
            ...props,
          }}
          ref={ref as Ref<HTMLInputElement>}
          aria-label={props.label}
          className={classes.input}
          disabled={disabled}
          placeholder={placeholder}
          required
        />

        {variant !== 'basic' && (
          <legend className={classes.legend}>{props.label}</legend>
        )}
      </fieldset>
    );
  }
);

Input.displayName = 'Input';
