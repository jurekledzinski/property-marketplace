import { ButtonIconProps } from './types';
import { forwardRef } from 'react';
import { Icon } from '@/components';

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ icon, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {typeof icon === 'string' ? (
          <span>{icon}</span>
        ) : (
          <Icon icon={icon} size="1x" />
        )}
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';
