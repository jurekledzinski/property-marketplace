import { Ref } from 'react';
import { InputVariant, Size } from '@/types';

export type BaseInputProps<T> = {
  disabled?: boolean;
  isError?: boolean;
  name?: string;
  ref?: Ref<T>;
  placeholder?: string;
  readOnly?: boolean;
  size?: Size;
  variant?: InputVariant;
  label?: string;
};

export interface InputProps extends BaseInputProps<HTMLInputElement> {
  as?: 'input';
  type?: 'email' | 'number' | 'password' | 'text';
}

export interface TextareaProps extends BaseInputProps<HTMLTextAreaElement> {
  as?: 'textarea';
  cols?: number;
  rows?: number;
}

export type UnionElements = HTMLTextAreaElement | HTMLInputElement;

export type MergeProps = InputProps | TextareaProps;
