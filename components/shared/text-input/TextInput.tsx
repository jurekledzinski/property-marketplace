import styles from './TextInput.module.css';
import { forwardRef } from 'react';
import { getInputProps } from './utils';
import { Input, InputWrapper } from '@/components';
import { TextInputProps } from './types';

export const TextInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  TextInputProps
>(
  (
    {
      as = 'input',
      endIcon,
      isError,
      isPending,
      startIcon,
      type = 'text',
      onClickEndIcon,
      onClickStartIcon,
      size,
      variant = 'basic',
      ...props
    },
    ref
  ) => {
    const inputProps = getInputProps({ as, type, isError, size, variant });

    return (
      <div className={styles.textInput}>
        <InputWrapper
          as={as}
          isError={isError}
          isPending={isPending}
          onClickEndIcon={onClickEndIcon}
          onClickStartIcon={onClickStartIcon}
          disabled={props.disabled}
          readOnly={props.readOnly}
          size={size}
          variant={variant}
          {...(endIcon && { endIcon: endIcon[0] })}
          {...(startIcon && { startIcon: startIcon[0] })}
        >
          <Input ref={ref} {...inputProps} {...props} />
        </InputWrapper>
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
