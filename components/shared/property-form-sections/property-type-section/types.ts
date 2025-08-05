import { InputsAdvertsFilter } from '@/components';
import { Rule } from '../types';
import { UseFormReturn } from 'react-hook-form';

export type PropertyTypeSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  rulesProperty?: Rule<'property'>;
  rulesCondition?: Rule<'condition'>;
  rulesAdvertisment?: Rule<'advertisement'>;
};
