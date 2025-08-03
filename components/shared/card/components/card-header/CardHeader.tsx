import { CardHeaderProps } from './types';

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <header className={className}>{children}</header>;
};
