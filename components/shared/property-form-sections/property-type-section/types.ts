import { PropertyTypeFields } from '@/components';
import {
  FieldErrors,
  Path,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';

export type PropertyTypeSectionProps<T extends PropertyTypeFields> = {
  controls: UseFormReturn<T>;
  errors: FieldErrors<PropertyTypeFields>;
  nameType: Path<T>;
  nameCondition: Path<T>;
  nameStatus: Path<T>;
  labels?: boolean;
  rulesType?: UseControllerProps<T, Path<T>>['rules'];
  rulesCondition?: UseControllerProps<T, Path<T>>['rules'];
  rulesStatus?: UseControllerProps<T, Path<T>>['rules'];
};
