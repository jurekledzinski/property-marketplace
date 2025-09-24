import { Countries } from '@/lib';
import { CountryState } from '@/hooks';
import { InputsAdvertsFilter } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type FilterFormProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  countries: Countries;
  getCities: (code: string) => void;
  getStates: (code: string) => void;
  isSuccessStates: boolean;
  onScrollEndCities: () => void;
  onScrollEndStates: () => void;
  onSubmit: SubmitHandler<InputsAdvertsFilter>;
  states: CountryState[];
  reset: Record<string, string>;
};
