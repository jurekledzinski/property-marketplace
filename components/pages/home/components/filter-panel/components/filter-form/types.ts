import { InputsAdvertsFilter } from '../../../../hooks';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type FilterFormProps = {
  controls: UseFormReturn<InputsAdvertsFilter, unknown, InputsAdvertsFilter>;
  onSubmit: SubmitHandler<InputsAdvertsFilter>;
};
