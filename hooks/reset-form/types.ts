import { FieldValues, UseFormReturn } from 'react-hook-form';

export type UseResetFormProps<T extends FieldValues> = {
  formControl: UseFormReturn<T>;
  isPending: boolean;
  defaultValues?: T;
  isSuccess?: boolean;
  onFailed?: () => void;
  onSuccess?: () => void;
};
