import { CardContentProps } from './types';

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={className}>{children}</div>;
};
