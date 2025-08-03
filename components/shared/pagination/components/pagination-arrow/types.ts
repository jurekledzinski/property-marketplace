import { ActionType } from '../../hooks';
import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@/types';

type ButtonArrow = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'id'
>;

export interface PaginationArrowProps extends ButtonArrow {
  id?: ActionType;
  label?: Icon | string;
}
