import { InputsAdvertsFilter } from '@/components';
import { UseControllerProps, UseFormReturn } from 'react-hook-form';

type Rule<K extends keyof InputsAdvertsFilter> = UseControllerProps<
  InputsAdvertsFilter,
  K
>['rules'];

export type PropertyTypeSectionProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  rulesProperty?: Rule<'property'>;
  rulesCondition?: Rule<'condition'>;
  rulesAdvertisment?: Rule<'advertisement'>;
};
