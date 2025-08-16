import { ContainerProps } from '../types';

type Params = Omit<ContainerProps, 'as' | 'children'>;

export type ClassesContainer = (params: Params) => string;
