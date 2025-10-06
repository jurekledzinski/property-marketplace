import { FieldPathValue, useWatch } from 'react-hook-form';
import { LocationFields } from '@/components';
import { UseLocationFieldsProps } from './types';

export const useLocationFields = <T extends LocationFields>({
  amountCities,
  amountStates,
  control,
  isSuccessStates,
  isSuccessCities,
  nameCity,
  nameCountry,
  nameState,
}: UseLocationFieldsProps<T>) => {
  const country = useWatch({ control, name: nameCountry });
  const state = useWatch({ control, name: nameState });
  const city = useWatch({ control, name: nameCity });

  const clearState = '' as FieldPathValue<T, typeof nameState>;
  const clearCity = '' as FieldPathValue<T, typeof nameCity>;

  const disabledState = country === '' || !isSuccessStates || !amountStates;

  const disabledCity =
    country === '' || state === '' || !isSuccessCities || !amountCities;

  return {
    country,
    state,
    city,
    clearState,
    clearCity,
    disabledState,
    disabledCity,
  };
};
