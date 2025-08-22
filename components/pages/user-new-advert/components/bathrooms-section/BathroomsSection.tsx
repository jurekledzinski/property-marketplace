import { BathroomsSectionProps } from './types';
import { Field, Label, Message, TextInput } from '@/components';

export const BathroomsSection = ({ controls }: BathroomsSectionProps) => {
  const { register, formState } = controls;
  const { errors } = formState;

  return (
    <>
      <Field>
        <Label>Bathrooms</Label>
        <TextInput
          type="number"
          min={0}
          max={10}
          {...register('bathrooms', {
            required: { message: 'Amount bathrooms is required', value: true },
          })}
          placeholder="Bathrooms"
        />
        {errors.bathrooms ? (
          <Message variant="error">{errors.bathrooms.message}</Message>
        ) : null}
      </Field>
    </>
  );
};
