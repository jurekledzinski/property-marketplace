import { Countries } from '@/services';
import { CountryState } from '@/hooks';
import { LocationFields } from '@/components';
import {
  FieldErrors,
  Path,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';

export type LocationSectionProps<T extends LocationFields> = {
  cities: CountryState[];
  controls: UseFormReturn<T>;
  countries: Countries;
  errors: FieldErrors<LocationFields>;
  getCities: (code: string, division1Code?: string) => void;
  getStates: (code: string) => void;
  isLoadingCities: boolean;
  isLoadingStates: boolean;
  isSuccessCities: boolean;
  isSuccessStates: boolean;
  nameCity: Path<T>;
  nameCountry: Path<T>;
  nameState: Path<T>;
  onScrollEndCities: () => void;
  onScrollEndStates: () => void;
  states: CountryState[];
  labels?: boolean;
  rulesCity?: UseControllerProps<T, Path<T>>['rules'];
  rulesCountry?: UseControllerProps<T, Path<T>>['rules'];
  rulesState?: UseControllerProps<T, Path<T>>['rules'];
};
