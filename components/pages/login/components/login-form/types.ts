import { InputsLogin } from '../../hooks';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type LoginFormProps = {
  controls: UseFormReturn<InputsLogin, unknown, InputsLogin>;
  onSubmit: SubmitHandler<InputsLogin>;
};
