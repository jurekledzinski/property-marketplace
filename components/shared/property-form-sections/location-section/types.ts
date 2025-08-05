import { InputsAdvertsFilter } from '@/components';
import { UseFormReturn, UseControllerProps } from 'react-hook-form';

export type LocationSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  rulesCountry?: UseControllerProps<InputsAdvertsFilter, 'country'>['rules'];
  rulesCity?: UseControllerProps<InputsAdvertsFilter, 'city'>['rules'];
};
