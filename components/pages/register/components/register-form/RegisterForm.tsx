import { FieldValues } from 'react-hook-form';
import { RegisterFormProps } from './types';
import {
  Button,
  ButtonGroup,
  Field,
  Form,
  Label,
  Message,
  PasswordInput,
  TextInput,
  RegisterValidation,
} from '@/components';

export const RegisterForm = <T extends FieldValues>({
  controls,
  errors,
  isPending,
  nameName,
  nameEmail,
  namePassword,
  nameConfirm,
  passwordRules,
  onSubmit,
}: RegisterFormProps<T>) => {
  const { register } = controls;

  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <Field>
        <Label htmlFor="name">Name</Label>
        <TextInput
          {...register(nameName, {
            required: { message: 'Name is required', value: true },
          })}
          id="name"
        />
        {errors.name ? <Message>{errors.name.message}</Message> : null}
      </Field>

      <Field>
        <Label htmlFor="email">Email</Label>
        <TextInput
          {...register(nameEmail, {
            required: { message: 'Email is required', value: true },
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address',
            },
          })}
          id="email"
        />
        {errors.email ? <Message>{errors.email.message}</Message> : null}
      </Field>

      <Field>
        <Label>Password</Label>
        <PasswordInput
          {...register(namePassword, {
            required: { message: 'Password is required', value: true },
            validate: passwordRules.validatePassword,
          })}
        />
        {errors.password ? <Message>{errors.password.message}</Message> : null}
      </Field>

      <Field>
        <Label>Confirm password</Label>
        <PasswordInput
          {...register(nameConfirm, {
            required: {
              message: 'Confirm password is required',
              value: true,
            },
            validate: passwordRules.validateConfirm,
          })}
        />
        {errors.confirm ? <Message>{errors.confirm.message}</Message> : null}
      </Field>

      <RegisterValidation passwordRules={passwordRules} />

      <ButtonGroup mt="mt-md" fullWidth>
        <Button
          fullWidth
          isLoading={isPending}
          label="Sign In"
          size="size-lg"
          type="submit"
        />
      </ButtonGroup>
    </Form>
  );
};
