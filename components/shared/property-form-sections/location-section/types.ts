import { LocationFields } from '@/components';
import {
  FieldErrors,
  Path,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';

export type LocationSectionProps<T extends LocationFields> = {
  controls: UseFormReturn<T>;
  errors: FieldErrors<LocationFields>;
  nameCountry: Path<T>;
  nameCity: Path<T>;
  labels?: boolean;
  rulesCountry?: UseControllerProps<T, Path<T>>['rules'];
  rulesCity?: UseControllerProps<T, Path<T>>['rules'];
};
