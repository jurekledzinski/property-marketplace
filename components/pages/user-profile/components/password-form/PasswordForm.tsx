import { FieldValues } from 'react-hook-form';
import { PasswordFormProps } from './types';
import {
  Button,
  ButtonGroup,
  Field,
  Form,
  Label,
  PasswordInput,
  RegisterValidation,
} from '@/components';

export const PasswordForm = <T extends FieldValues>({
  controls,
  nameConfirm,
  namePassword,
  onSubmit,
  passwordRules,
}: PasswordFormProps<T>) => {
  const { register } = controls;

  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <Field>
        <Label>Password</Label>
        <PasswordInput
          {...register(namePassword, {
            required: { message: 'Password is required', value: true },
            validate: passwordRules.validatePassword,
          })}
        />
        {/* <Message>Password is required</Message> */}
      </Field>
      <Field>
        <Label>Confirm Password</Label>
        <PasswordInput
          {...register(nameConfirm, {
            required: {
              message: 'Confirm password is required',
              value: true,
            },
            validate: passwordRules.validateConfirm,
          })}
        />
        {/* <Message>Password is required</Message> */}
      </Field>
      <RegisterValidation passwordRules={passwordRules} />
      <ButtonGroup mt="mt-md" fullWidth>
        <Button type="submit" label="Sign In" fullWidth size="size-lg" />
      </ButtonGroup>
    </Form>
  );
};
