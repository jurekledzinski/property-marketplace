import {
  IconBaseButtonProps,
  IconButtonProps,
  IconLinkButtonProps,
} from '../types';

type Color = IconBaseButtonProps['color'];

export const getBackgroundConstrast = (color: Color) => {
  return `${color}-contrast`;
};

export const formatProps = ({
  border,
  color,
  disabled,
  fullWidth,
  isLoading,
  radius,
  size,
  variant,
  contrast,
  ...rest
}: Omit<IconButtonProps, 'icon'> | Omit<IconLinkButtonProps, 'icon'>) => {
  const button = {
    border,
    color,
    contrast,
    disabled,
    isLoading,
    fullWidth,
    radius,
    size,
    variant,
  };
  return { button, rest };
};
