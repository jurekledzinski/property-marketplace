import { Icon } from '@/components';
import { StatusIconProps } from './types';

export const StatusIcon = ({ className, icon }: StatusIconProps) => {
  return (
    <span className={className}>
      <Icon icon={icon} size="1x" />
    </span>
  );
};
