import { Size, SpacingToken } from '@/types';

export interface AccordionContentProps extends SpacingToken {
  children?: React.ReactNode;
  className?: string;
  size?: Size;
}
