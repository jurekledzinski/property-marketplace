'use client';
import { FieldValues } from 'react-hook-form';
import { useEffect } from 'react';
import { UseResetFormProps } from './types';

export const useResetForm = <T extends FieldValues>({
  isPending,
  isSuccess,
  methods,
  onSuccess,
  defaultValues = {} as T,
}: UseResetFormProps<T>) => {
  useEffect(() => {
    if (methods.formState.isSubmitSuccessful && !isPending && isSuccess) {
      if (Object.keys(defaultValues).length) {
        methods.reset(defaultValues);
      }
      onSuccess();
    }
  }, [defaultValues, isPending, methods, isSuccess, onSuccess]);
};
