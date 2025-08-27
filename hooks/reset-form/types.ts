import { FieldValues, UseFormReturn } from 'react-hook-form';

export type UseResetFormProps<T extends FieldValues> = {
  isPending: boolean;
  isSuccess: boolean;
  methods: UseFormReturn<T, unknown, undefined>;
  onSuccess: () => void;
  defaultValues?: T;
};
