import { PropertyStylesFields } from '@/components';
import {
  FieldErrors,
  Path,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';

export type ArchitectureProps<T extends PropertyStylesFields> = {
  controls: UseFormReturn<T>;
  errors: FieldErrors<PropertyStylesFields>;
  nameStyle: Path<T>;
  rulesArchitecture?: UseControllerProps<T, Path<T>>['rules'];
};
