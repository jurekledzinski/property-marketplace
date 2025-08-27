import { FieldValues, UseFormReturn } from 'react-hook-form';

export type UseResetFormProps<T extends FieldValues> = {
  isPending: boolean;
  isSuccess: boolean;
  formControl: UseFormReturn<T>;
  onSuccess?: () => void;
  defaultValues?: T;
};
