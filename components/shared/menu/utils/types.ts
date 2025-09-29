import { Size } from '@/types';

type Params = { className?: string; size?: Size };

export type MenuClassNames = (params: Params) => string;
