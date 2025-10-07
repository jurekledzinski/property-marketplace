import { Icons } from '@/types';
import { HTMLAttributes } from 'react';

export interface ValidationItemProps extends HTMLAttributes<HTMLLIElement> {
  isValid: boolean;
  icons?: Icons;
}
