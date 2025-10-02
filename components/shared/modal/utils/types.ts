import { Color } from '@/types';
import { Variant } from '../types';

type Params = { color?: Color; variant?: Variant };

export type ClassNamesModalHeader = (params: Params) => {
  header: string;
  title: string;
};
