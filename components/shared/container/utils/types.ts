import { ContainerProps } from '../types';

type Params = Pick<
  ContainerProps,
  'className' | 'margin' | 'maxWidth' | 'padding'
>;

export type ClassesContainer = (params: Params) => string;
