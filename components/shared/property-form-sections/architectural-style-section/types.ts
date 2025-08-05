import { InputsAdvertsFilter } from '@/components';
import { UseFormReturn } from 'react-hook-form';
import { Rule } from '../types';

export type ArchitectureProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  rulesArchitecture: Rule<'style'>;
};
