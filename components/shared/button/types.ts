import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Border, Color, Icons, Radius, Size, Variant } from '@/types';

export type BaseButtonProps = {
  label: string;
  border?: Border;
  iconStart?: Icons;
  iconEnd?: Icons;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?: Radius;
  size?: Size;
  color?: Color;
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
