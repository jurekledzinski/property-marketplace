import { BaseMenuProps } from './types';
import { forwardRef, Ref } from 'react';

export const BaseMenu = forwardRef<HTMLDivElement, BaseMenuProps>(
  ({ children, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

BaseMenu.displayName = 'BaseMenu';
