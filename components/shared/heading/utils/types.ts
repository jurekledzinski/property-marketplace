import { HeadingProps } from '../types';

type Params = Omit<HeadingProps, 'children'>;

export type ClassesHeading = (params: Params) => string;
