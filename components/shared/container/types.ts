import { MaxWidthToken, SpacingToken } from '@/types';

export interface ContainerProps extends SpacingToken {
  as?: 'div' | 'main' | 'section';
  className?: string;
  children?: React.ReactNode;
  maxWidth?: MaxWidthToken;
}
