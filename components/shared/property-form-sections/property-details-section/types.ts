import { InputsAdvertsFilter } from '@/components';
import { Rule } from '../types';
import { UseFormReturn } from 'react-hook-form';

export type PropertyDetailsSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  rulesArea?: Rule<'area'>;
  rulesRooms?: Rule<'rooms'>;
  rulesYear?: Rule<'year'>;
};
