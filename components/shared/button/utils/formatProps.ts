import { ButtonProps, LinkButtonProps } from '../types';

export const formatProps = ({
  border,
  color,
  disabled,
  fullWidth,
  isLoading,
  radius,
  size,
  variant,
  ...rest
}:
  | Omit<ButtonProps, 'iconEnd' | 'iconStart' | 'label'>
  | Omit<LinkButtonProps, 'iconEnd' | 'iconStart' | 'label'>) => {
  const button = {
    border,
    color,
    disabled,
    isLoading,
    fullWidth,
    radius,
    size,
    variant,
  };
  return { button, rest };
};
