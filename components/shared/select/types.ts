import { Size, Variant } from '@/types';

export type Option = { key: string; value: string };
type PopOverVariant = Exclude<Variant, 'text'> | 'basic' | 'underline';

export type SelectProps = {
  children?: React.ReactNode;
  gap?: number;
  isError?: boolean;
  label?: string;
  size?: Size;
  variant?: PopOverVariant;
  value?: string;
  onChange?: (key: string, value?: string) => void;
};
