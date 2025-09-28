import { Countries } from '@/lib';
import { CountryState } from '@/hooks';
import { InputsAdvertsFilter } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type FilterFormProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  cities: CountryState[];
  countries: Countries;
  getCities: (code: string, division1Code?: string) => void;
  getStates: (code: string) => void;
  isLoadingCities: boolean;
  isLoadingStates: boolean;
  isSuccessCities: boolean;
  isSuccessStates: boolean;
  onScrollEndCities: () => void;
  onScrollEndStates: () => void;
  onSubmit: SubmitHandler<InputsAdvertsFilter>;
  states: CountryState[];
};
