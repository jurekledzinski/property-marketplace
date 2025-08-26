import { HTMLAttributes } from 'react';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  onSelectItem?: (id: string) => void;
}

export type BaseMenuProps = MenuProps;
