import { InputsAdvertsFilter, PropertyPricesFields } from '@/components';
import { FieldErrors, UseFormReturn } from 'react-hook-form';

export type PriceSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  errors: FieldErrors<PropertyPricesFields>;
};
