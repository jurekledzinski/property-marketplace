import { InputsAdvertsFilter } from '@/components/pages/home/hooks';
import { UseFormReturn } from 'react-hook-form';

export type PropertyDetailsSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
};
