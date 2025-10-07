import { FieldValues, Validate } from 'react-hook-form';

export type CheckListProps<T extends FieldValues> = {
  mapRules: Record<string, Validate<string, T>>;
  value: string;
  formValues: T;
};
