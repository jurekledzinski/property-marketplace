import { BaseInputProps } from '../types';
import { Icon } from '@/types';

type Variant = BaseInputProps<HTMLInputElement>['variant'];
type Size = BaseInputProps<HTMLInputElement>['size'];

export type BaseParmas = {
  variant: Variant;
  size: Size;
  isError?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  startIcon?: Icon;
  endIcon?: Icon | string;
  isPending?: boolean;
  divider?: boolean;
  as?: 'input' | 'textarea';
  className?: string;
};

export type GetClassNamesInputWrapper = (params: BaseParmas) => {
  inputWrapper: string;
  startIcon: string;
  endIcon: string;
  statusIcon: string;
};

export type GetClassNamesInput = (
  params: Pick<BaseParmas, 'isError' | 'size' | 'variant' | 'disabled'>
) => {
  fieldset: string;
  input: string;
  legend: string;
  textarea: string;
};
