'use client';
import { FieldValues } from 'react-hook-form';
import { useEffect } from 'react';
import { UseResetFormProps } from './types';

export const useResetForm = <T extends FieldValues>({
  isPending,
  isSuccess,
  formControl,
  onSuccess,
  defaultValues,
}: UseResetFormProps<T>) => {
  useEffect(() => {
    if (formControl.formState.isSubmitSuccessful && !isPending && isSuccess) {
      if (Object.keys(defaultValues ?? {}).length) {
        formControl.reset(defaultValues);
      }

      if (onSuccess) onSuccess();
    }
  }, [defaultValues, isPending, formControl, isSuccess, onSuccess]);
};
