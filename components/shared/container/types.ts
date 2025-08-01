import { MarginToken, MaxWidthToken, PaddingToken } from '@/types';

export interface ContainerProps {
  as?: 'div' | 'main' | 'section';
  className?: string;
  children?: React.ReactNode;
  maxWidth?: MaxWidthToken;
  padding?: PaddingToken;
  margin?: MarginToken;
}
