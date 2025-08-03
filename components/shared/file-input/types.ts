import { BaseButtonProps } from '@/components';
import { InputHTMLAttributes } from 'react';

type OmittedProps = 'onError' | 'size' | 'onClick' | 'color';

type InputFile = Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps>;

type Type = 'amount' | 'size' | 'type';

export type OnError = (type: Type, details: string, name?: string) => void;

export interface FileInputProps extends InputFile, BaseButtonProps {}
