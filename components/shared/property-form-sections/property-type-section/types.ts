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
  nameCondition: Path<T>;
  nameStatus: Path<T>;
  nameType: Path<T>;
  labels?: boolean;
  rulesCondition?: UseControllerProps<T, Path<T>>['rules'];
  rulesStatus?: UseControllerProps<T, Path<T>>['rules'];
  rulesType?: UseControllerProps<T, Path<T>>['rules'];
};
