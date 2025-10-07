import { Countries } from '@/services';
import { CountryState } from '@/hooks';
import { InputsAdvertsFilter } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type FilterFormProps = {
  cities: CountryState[];
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
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
  closeOnScroll?: boolean;
};
