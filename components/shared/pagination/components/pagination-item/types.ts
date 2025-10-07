import { ButtonHTMLAttributes } from 'react';

export type PaginationItemsProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'onClick'
>;
