import { HTMLAttributes } from 'react';
import { Size } from '@/types';

export interface MenuContainerProps extends HTMLAttributes<HTMLDivElement> {
  onSelectItem?: (id: string) => void;
  size?: Size;
}
