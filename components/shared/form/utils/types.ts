import { GapToken, Orientation } from '@/types';

type Params = {
  className?: string;
  gap?: GapToken;
  orientation?: Orientation;
};

export type ClassNamesForm = (params: Params) => string;
export type ClassNamesFormGroup = (params: Params) => string;
