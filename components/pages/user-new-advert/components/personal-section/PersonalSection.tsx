import { Field, Label, Message, TextInput } from '@/components';
import { PersonalSectionProps } from './types';

export const PersonalSection = ({ controls }: PersonalSectionProps) => {
  const { formState, register } = controls;
  const { errors } = formState;

  return (
    <>
      <Field>
        <Label>Advertiser</Label>
        <TextInput
          {...register('advertiser', {
            required: { message: 'Advertiser is required', value: true },
          })}
        />
        {errors.advertiser ? (
          <Message variant="error">{errors.advertiser.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label>Email</Label>
        <TextInput
          type="email"
          {...register('email', {
            required: { message: 'Email is required', value: true },
          })}
        />
        {errors.email ? (
          <Message variant="error">{errors.email.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label>Phone</Label>
        <TextInput
          type="text"
          {...register('phone', {
            required: { message: 'Phone is required', value: true },
          })}
        />
        {errors.phone ? (
          <Message variant="error">{errors.phone.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label>Street</Label>
        <TextInput
          type="text"
          {...register('street', {
            required: { message: 'Street is required', value: true },
          })}
        />
        {errors.street ? (
          <Message variant="error">{errors.street.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label>Post code</Label>
        <TextInput
          type="text"
          {...register('postalCode', {
            required: { message: 'Post code is required', value: true },
          })}
        />
        {errors.postalCode ? (
          <Message variant="error">{errors.postalCode.message}</Message>
        ) : null}
      </Field>
    </>
  );
};
