import { InputsAdvertsFilter } from '@/components';
import { Rule } from '../types';
import { UseFormReturn } from 'react-hook-form';

export type PropertyTypeSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  rulesType?: Rule<'type'>;
  rulesCondition?: Rule<'condition'>;
  rulesStatus?: Rule<'status'>;
};
