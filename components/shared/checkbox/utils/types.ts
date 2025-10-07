import { Color, Size } from '@/types';
import { VariantCheckbox } from '../types';

type Params = {
  className?: string;
  classNameLabel?: string;
  color?: Color;
  disabled?: boolean;
  readOnly?: boolean;
  size?: Size;
  variant?: VariantCheckbox;
};

export type GetClassNamesCheckbox = (params: Params) => string;
export type GetClassNamesLabelCheckbox = (params: Params) => string;
