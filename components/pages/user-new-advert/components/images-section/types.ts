import { InputsAvert } from '../../hooks';
import { useControlValidateFiles } from './hooks';
import { UseFormReturn } from 'react-hook-form';

export type ImagesSectionProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  validate: ReturnType<typeof useControlValidateFiles>;
};
