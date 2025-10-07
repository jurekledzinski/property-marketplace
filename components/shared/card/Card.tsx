import { CardProps } from './types';

export const Card = ({ children, className }: CardProps) => {
  return <article className={className}>{children}</article>;
};
