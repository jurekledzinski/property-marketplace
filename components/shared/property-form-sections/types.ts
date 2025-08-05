import { InputsAdvertsFilter } from '@/components/pages';
import { UseControllerProps } from 'react-hook-form';

export type Rule<K extends keyof InputsAdvertsFilter> = UseControllerProps<
  InputsAdvertsFilter,
  K
>['rules'];
