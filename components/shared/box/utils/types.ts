import { BoxProps } from '../types';

type Params = Omit<BoxProps, 'children'>;

export type ClassesBox = (params: Params) => string;
