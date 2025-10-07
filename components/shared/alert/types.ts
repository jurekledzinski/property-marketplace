import { Color, Icon, Radius, Size, SpacingToken } from '@/types';

export interface AlertProps extends SpacingToken {
  color: Exclude<Color, 'primary'> | 'info';
  icon: Icon;
  message: string;
  isClosable?: boolean;
  fullWidth?: boolean;
  radius?: Radius;
  size?: Omit<Size, 'size-md' | 'size-lg'>;
  variant?: 'contained' | 'filled' | 'light' | 'outlined';
}
