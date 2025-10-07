import { ChipWrapper } from './components';
import { ChipProps } from './types';

export const Chip = ({ label, ...props }: ChipProps) => {
  return <ChipWrapper {...props}>{label}</ChipWrapper>;
};
