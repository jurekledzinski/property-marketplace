import { Control, Path } from 'react-hook-form';
import { LocationFields } from '@/components';

export type UseLocationFieldsProps<T extends LocationFields> = {
  amountCities: number;
  amountStates: number;
  control: Control<T, unknown, T>;
  isSuccessCities: boolean;
  isSuccessStates: boolean;
  nameCity: Path<T>;
  nameCountry: Path<T>;
  nameState: Path<T>;
};
