import { Countries } from '@/lib';
import { CountryState } from '@/hooks';
import { LocationFields } from '@/components';
import {
  FieldErrors,
  Path,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';

export type LocationSectionProps<T extends LocationFields> = {
  cities: any;
  controls: UseFormReturn<T>;
  countries: Countries;
  errors: FieldErrors<LocationFields>;
  getCities: (code: string) => void;
  getStates: (code: string) => void;
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
