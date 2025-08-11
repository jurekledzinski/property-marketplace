import { ChipProps } from '../types';

type PickUnions = 'color' | 'onClick' | 'radius' | 'size' | 'variant';

type Params = Pick<ChipProps, PickUnions>;

export type GetChipClassNamesFn = (params: Params) => {
  chipWrapper: string;
  delete: string;
  label: string;
};
