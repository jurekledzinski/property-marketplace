import { Color, Icon, Radius, Size } from '@/types';

export type AlertProps = {
  color: Exclude<Color, 'primary'> | 'info';
  icon: Icon;
  message: string;
  fullWidth?: boolean;
  radius?: Radius;
  size?: Size;
  variant?: 'contained' | 'outlined';
};
