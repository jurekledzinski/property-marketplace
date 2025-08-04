import PopOverProvider from '@/components/shared/pop-over/store';
import { forwardRef } from 'react';
import { SelectProps } from './types';
import { SelectProvider } from './store';

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectProvider value={{ ...props, ref }}>
        <PopOverProvider>{children}</PopOverProvider>
      </SelectProvider>
    );
  }
);

Select.displayName = 'Select';
