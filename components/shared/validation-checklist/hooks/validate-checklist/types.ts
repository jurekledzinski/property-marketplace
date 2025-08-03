import { Validate } from 'react-hook-form';

export type CheckListProps<T> = {
  mapRules: Record<string, Validate<string, T>>;
  value: string;
  formValues: T;
};
