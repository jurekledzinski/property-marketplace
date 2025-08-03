import { FileInputProps } from '../types';

type OmittedProps =
  | 'allowTypes'
  | 'disabled'
  | 'maxAmount'
  | 'maxSize'
  | 'onError';

type CustomProps = Omit<FileInputProps, OmittedProps>;

export const getFileInputProps = (props: CustomProps) => {
  const {
    size = 'size-sm',
    variant = 'contained',
    label,
    border,
    iconStart,
    iconEnd,
    isLoading,
    fullWidth,
    radius,
    color = 'primary',
    ...inputProps
  } = props;

  const buttonProps = {
    size,
    variant,
    label,
    border,
    iconStart,
    iconEnd,
    isLoading,
    fullWidth,
    radius,
    color,
  };

  return { buttonProps, inputProps };
};
