import { FieldErrors } from 'react-hook-form';

export const hasError = <T extends object>(
  key: string,
  errors: FieldErrors<T>,
  dirty?: boolean
) => {
  const errorValue = errors[key as keyof FieldErrors<T>];

  const hasError = !!errorValue;

  if (dirty === true) {
    return hasError;
  }

  return hasError ? true : undefined;
};
