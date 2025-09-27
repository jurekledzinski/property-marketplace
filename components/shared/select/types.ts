import { Size, Variant } from '@/types';

export type Option = {
  key: string;
  value: string;
};
type PopOverVariant = Exclude<Variant, 'text'> | 'basic' | 'underline';

export type SelectProps = {
  children?: React.ReactNode;
  closeOnScroll?: boolean;
  gap?: number;
  isError?: boolean;
  label?: string;
  onChange?: (key: string, value?: Record<string, string>) => void;
  size?: Size;
  value?: string;
  variant?: PopOverVariant;
};
