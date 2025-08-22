import { PropertyMetricFields } from '@/components';
import {
  FieldErrors,
  Path,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';

export type PropertyDetailsSectionProps<T extends PropertyMetricFields> = {
  controls: UseFormReturn<T>;
  errors: FieldErrors<PropertyMetricFields>;
  nameArea: Path<T>;
  nameRooms: Path<T>;
  nameYear: Path<T>;
  labels?: boolean;
  rulesArea?: UseControllerProps<T, Path<T>>['rules'];
  rulesRooms?: UseControllerProps<T, Path<T>>['rules'];
  rulesYear?: UseControllerProps<T, Path<T>>['rules'];
};
