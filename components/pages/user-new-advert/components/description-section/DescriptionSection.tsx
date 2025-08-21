import { DescriptionSectionProps } from './types';
import { Field, Label, Message, TextInput } from '@/components';

export const DescriptionSection = ({ controls }: DescriptionSectionProps) => {
  const { formState, register } = controls;
  const { errors } = formState;

  return (
    <>
      <Field>
        <Label>Title</Label>
        <TextInput
          {...register('title', {
            required: { message: 'Title is required', value: true },
          })}
        />
        {errors.title ? (
          <Message variant="error">{errors.title.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label>Description</Label>
        <TextInput
          {...register('description', {
            required: { message: 'Description is required', value: true },
          })}
        />
        {errors.description ? (
          <Message variant="error">{errors.description.message}</Message>
        ) : null}
      </Field>
    </>
  );
};
