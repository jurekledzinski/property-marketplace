import { HTMLAttributes } from 'react';

export interface TableStatusProps extends HTMLAttributes<HTMLDivElement> {
  isEmpty?: boolean;
  isLoading?: boolean;
}
