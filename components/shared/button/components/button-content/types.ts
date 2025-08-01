import { Icons, Size } from '@/types';

export type ButtonContentProps = {
  isLoading?: boolean;
  iconStart?: Icons;
  iconEnd?: Icons;
  size?: Size;
  label: string;
};
