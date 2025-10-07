import { ButtonIcon, StatusIcon } from '../';
import { forwardRef } from 'react';
import { getClassNamesInputWrapper } from '../../utils';
import { InputWrapperProps } from './types';
import { Loader } from '@/components';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  (
    {
      children,
      size = 'size-sm',
      variant = 'basic',
      statusVisible = true,
      ...props
    },
    ref
  ) => {
    const classes = getClassNamesInputWrapper({ ...props, size, variant });

    const {
      as,
      isError,
      isPending,
      startIcon,
      dividerStart,
      dividerEnd,
      endIcon,
      onClickStartIcon,
      onClickEndIcon,
      ...rest
    } = props;

    return (
      <div {...rest} className={classes.inputWrapper} ref={ref}>
        {(as === 'input' && startIcon) ||
        (as === 'input' && dividerStart && startIcon) ? (
          <ButtonIcon
            className={classes.startIcon}
            icon={startIcon}
            onClick={onClickStartIcon}
          />
        ) : null}

        {children}

        {isError !== undefined && !isPending && statusVisible ? (
          isError ? (
            <StatusIcon
              className={classes.statusIcon}
              icon={faExclamationCircle}
            />
          ) : (
            <StatusIcon className={classes.statusIcon} icon={faCheckCircle} />
          )
        ) : null}

        {isPending ? (
          <div className={classes.endIcon}>
            <Loader size={size} />
          </div>
        ) : (endIcon && isError === undefined) || (dividerEnd && endIcon) ? (
          <ButtonIcon
            className={classes.endIcon}
            icon={endIcon}
            onClick={(e) => {
              e.preventDefault();
              if (onClickEndIcon) onClickEndIcon(e);
            }}
          />
        ) : null}
      </div>
    );
  }
);

InputWrapper.displayName = 'InputWrapper';
