import { memo } from 'react';
import { UserFormProps } from './types';
import {
  Button,
  ButtonGroup,
  Field,
  Form,
  Label,
  Message,
  TextInput,
} from '@/components';

const UserFormPart = ({ controls, isPending, onSubmit }: UserFormProps) => {
  const { register, formState } = controls;
  const { errors } = formState;

  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <Field>
        <Label>Name</Label>
        <TextInput
          {...register('name', {
            required: { message: 'Name is requied', value: true },
          })}
        />
        {errors.name ? <Message>{errors.name.message}</Message> : null}
      </Field>

      <Field>
        <Label>Email</Label>
        <TextInput
          {...register('email', {
            required: { message: 'Email is required', value: true },
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address',
            },
          })}
        />
        {errors.email ? <Message>{errors.email.message}</Message> : null}
      </Field>

      <ButtonGroup mt="mt-md" fullWidth>
        <Button
          fullWidth
          isLoading={isPending}
          label="Update Profile"
          size="size-lg"
          type="submit"
        />
      </ButtonGroup>
    </Form>
  );
};

export const UserForm = memo(UserFormPart) as typeof UserFormPart;
