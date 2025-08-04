import { InputsAdvertsFilter } from '@/components/pages/home/hooks';
import { UseFormReturn } from 'react-hook-form';

export type AmenitiesSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
};
