import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Border, Color, Icons, Radius, Size, Variant } from '@/types';

export type BaseButtonProps = {
  label: string;
  border?: Border;
  color?: Color;
  disabled?: boolean;
  fullWidth?: boolean;
  iconEnd?: Icons;
  iconStart?: Icons;
  isLoading?: boolean;
  radius?: Radius;
  size?: Size;
  variant?: Variant;
};

export interface ButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {}

export interface LinkButtonProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  href: string;
  type?: never;
}
