import { ButtonGroupProps } from '../types';

type Params = Omit<ButtonGroupProps, 'children' | 'marginBottom' | 'marginTop'>;

export type GetClassButtonGroup = (params: Params) => string;
