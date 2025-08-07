import { ButtonGroupProps } from '../types';
import { CSSProperties } from 'react';

type Params = Omit<ButtonGroupProps, 'children'>;

export type GetClassButtonGroup = (params: Params) => string;

export type GetInlineGroupStyles = (params: Params) => CSSProperties;
