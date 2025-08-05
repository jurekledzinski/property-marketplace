import { InputsAdvertsFilter } from '@/components';
import { Rule } from '../types';
import { UseFormReturn } from 'react-hook-form';

export type LocationSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  rulesCountry?: Rule<'country'>;
  rulesCity?: Rule<'city'>;
};
