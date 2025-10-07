import { ChipProps } from '../../types';

export interface ChipWrapperProps extends Omit<ChipProps, 'label'> {
  name?: string;
}
