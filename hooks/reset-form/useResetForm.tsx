'use client';
import { FieldValues } from 'react-hook-form';
import { useEffect } from 'react';
import { UseResetFormProps } from './types';

export const useResetForm = <T extends FieldValues>({
  isPending,
  isSuccess,
  formControl,
  onFailed,
  onSuccess,
  defaultValues,
}: UseResetFormProps<T>) => {
  useEffect(() => {
    const { isSubmitSuccessful } = formControl.formState;

    if (isSubmitSuccessful && !isPending && isSuccess) {
      if (Object.keys(defaultValues ?? {}).length) {
        formControl.reset(defaultValues);
      }

      if (onSuccess) onSuccess();
    }

    if (isSubmitSuccessful && !isPending && isSuccess === false) {
      if (onFailed) onFailed();
    }
  }, [defaultValues, isPending, formControl, , isSuccess, onFailed, onSuccess]);
};
