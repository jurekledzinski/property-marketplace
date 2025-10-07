import { HTMLAttributes } from 'react';
import { Icons } from '@/types';

export interface ValidationChecklistProps
  extends HTMLAttributes<HTMLUListElement> {
  icons?: Icons;
}
