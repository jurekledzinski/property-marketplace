import { LocationFields } from '@/components';
import {
  Control,
  FieldErrors,
  Path,
  UseControllerProps,
} from 'react-hook-form';

export type LocationSelectProps<
  T extends LocationFields,
  V extends Record<string, unknown>
> = {
  control: Control<T, unknown, T>;
  data: V[];
  errors: FieldErrors<LocationFields>;
  nameField: Path<T>;
  onSelect: (
    key: string,
    onChange: (...event: unknown[]) => void,
    payload?: unknown
  ) => void;
  options: { key: string; value: string }[];
  renderOption: (item: V, index: number) => React.ReactNode;
  disabled?: boolean;
  isLabel?: boolean;
  isLoadingCities?: boolean;
  isLoadingStates?: boolean;
  label?: string;
  onScrollEnd?: () => void;
  placeHolder?: string;
  rulesField?: UseControllerProps<T, Path<T>>['rules'];
};
