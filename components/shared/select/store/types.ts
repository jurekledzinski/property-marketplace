import { OnKeyArrow, OnKeyPress } from '@/hooks';
import { SelectProps } from '../types';

export interface ContextSelect extends SelectProps {
  onKeyArrow?: OnKeyArrow;
  onKeyPress?: OnKeyPress;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

export type SelectProviderProps = {
  children: React.ReactNode;
  value: ContextSelect;
};
