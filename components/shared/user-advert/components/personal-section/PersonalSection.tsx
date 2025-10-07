import { Field, Label, Message, TextInput } from '@/components';
import { PersonalSectionProps } from './types';

export const PersonalSection = ({ controls }: PersonalSectionProps) => {
  const { formState, register } = controls;
  const { errors } = formState;

  return (
    <>
      <Field>
        <Label htmlFor="advertiser">Advertiser</Label>
        <TextInput
          {...register('advertiser', {
            required: { message: 'Advertiser is required', value: true },
          })}
          id="advertiser"
          placeholder="Advertiser"
        />
        {errors.advertiser ? (
          <Message variant="error">{errors.advertiser.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          type="email"
          {...register('email', {
            required: { message: 'Email is required', value: true },
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address',
            },
          })}
          placeholder="Email"
        />
        {errors.email ? (
          <Message variant="error">{errors.email.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label htmlFor="phone">Phone</Label>
        <TextInput
          type="text"
          {...register('phone', {
            required: { message: 'Phone is required', value: true },
          })}
          id="phone"
          placeholder="Phone number"
        />
        {errors.phone ? (
          <Message variant="error">{errors.phone.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label htmlFor="street">Street</Label>
        <TextInput
          type="text"
          {...register('street', {
            required: { message: 'Street is required', value: true },
          })}
          id="street"
          placeholder="Street"
        />
        {errors.street ? (
          <Message variant="error">{errors.street.message}</Message>
        ) : null}
      </Field>
      <Field>
        <Label htmlFor="postalCode">Post code</Label>
        <TextInput
          type="text"
          {...register('postalCode', {
            required: { message: 'Post code is required', value: true },
          })}
          id="postalCode"
          placeholder="Post code"
        />
        {errors.postalCode ? (
          <Message variant="error">{errors.postalCode.message}</Message>
        ) : null}
      </Field>
    </>
  );
};
