import { LoginFormProps } from './types';
import {
  Button,
  ButtonGroup,
  Field,
  Form,
  Label,
  Message,
  PasswordInput,
  TextInput,
} from '@/components';

export const LoginForm = ({
  controls,
  isPending,
  onSubmit,
}: LoginFormProps) => {
  const { register, formState } = controls;
  const { errors } = formState;

  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <Field>
        <Label htmlFor="email">Email</Label>
        <TextInput
          {...register('email', {
            required: { message: 'Email is required', value: true },
          })}
          id="email"
        />
        {errors.email ? <Message>{errors.email.message}</Message> : null}
      </Field>

      <Field>
        <Label>Password</Label>
        <PasswordInput
          {...register('password', {
            required: { message: 'Password is required', value: true },
          })}
        />
        {errors.password ? <Message>{errors.password.message}</Message> : null}
      </Field>

      <ButtonGroup mt="mt-md" fullWidth>
        <Button
          fullWidth
          label="Sign In"
          isLoading={isPending}
          size="size-lg"
          type="submit"
        />
      </ButtonGroup>
    </Form>
  );
};
