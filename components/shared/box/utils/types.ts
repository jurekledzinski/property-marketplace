import { BoxProps } from '../types';

type Params = Pick<BoxProps, 'className' | 'margin' | 'padding'>;

export type ClassesBox = (params: Params) => string;
