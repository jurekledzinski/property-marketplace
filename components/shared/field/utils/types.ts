import { GapToken } from '@/types';

type Params = { className?: string; gap?: GapToken };

export type ClassNamesField = (params: Params) => string;
