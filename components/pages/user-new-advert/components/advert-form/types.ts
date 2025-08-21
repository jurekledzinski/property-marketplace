import { InputsAvert } from '../../hooks';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type AdvertFormProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  onSubmit: SubmitHandler<InputsAvert>;
};
