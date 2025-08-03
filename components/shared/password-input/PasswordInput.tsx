import styles from './PasswordInput.module.css';
import { forwardRef, Ref } from 'react';
import { Input, InputWrapper } from '../';
import { PasswordInputProps } from './types';
import { useState } from 'react';

export const PasswordInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  PasswordInputProps
>(
  (
    { endIcon, startIcon, isPending, ...props },
    ref: Ref<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const [show, setShow] = useState(false);

    return (
      <div className={styles.passwordInput}>
        <InputWrapper
          divider={true}
          isPending={isPending}
          onClickEndIcon={(e) => {
            e.preventDefault();
            setShow((prev) => !prev);
          }}
          {...(endIcon && { endIcon: show ? endIcon[0] : endIcon[1] })}
          {...(startIcon && { startIcon: startIcon[0] })}
          {...props}
        >
          <Input ref={ref} type={show ? 'text' : 'password'} {...props} />
        </InputWrapper>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
