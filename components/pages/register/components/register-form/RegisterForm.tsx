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
        <Label>Name</Label>
        <TextInput
          {...register(nameName, {
            required: { message: 'Name is required', value: true },
          })}
        />
        {errors.name ? <Message>{errors.name.message}</Message> : null}
      </Field>

      <Field>
        <Label>Email</Label>
        <TextInput
          {...register(nameEmail, {
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

      <Field>
        <Label>Password</Label>
        <PasswordInput
          {...register(namePassword, {
            required: { message: 'Password is required', value: true },
            validate: passwordRules.validatePassword,
          })}
        />
        {/* <Message>Email is required</Message> */}
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
        {/* <Message>Confirm password is required</Message> */}
      </Field>

      <RegisterValidation passwordRules={passwordRules} />
      <ButtonGroup mt="mt-md" fullWidth>
        <Button type="submit" label="Sign In" fullWidth size="size-lg" />
      </ButtonGroup>
    </Form>
  );
};
