import { forwardRef } from 'react';
import { Input, InputWrapper } from '@/components';
import { SearchInputProps } from './types';

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      endIcon,
      startIcon,
      isPending,
      onClickEndIcon,
      onClickStartIcon,
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapper
        as="input"
        dividerStart={true}
        dividerEnd={true}
        isPending={isPending}
        onClickEndIcon={onClickEndIcon}
        onClickStartIcon={onClickStartIcon}
        {...(endIcon && { endIcon: endIcon[0] })}
        {...(startIcon && { startIcon: startIcon[0] })}
        {...props}
      >
        <Input {...props} type={'text'} ref={ref} />
      </InputWrapper>
    );
  }
);

SearchInput.displayName = 'SearchInput';
