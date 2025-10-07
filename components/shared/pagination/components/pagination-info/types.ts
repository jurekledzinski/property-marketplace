import { HTMLAttributes } from 'react';

export interface PaginationInfoProps extends HTMLAttributes<HTMLDivElement> {
  indexStart?: number;
  indexEnd?: number;
  totalAmount?: number;
}
