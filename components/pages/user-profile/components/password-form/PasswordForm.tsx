import { FieldValues } from 'react-hook-form';
import { memo } from 'react';
import { PasswordFormProps } from './types';
import {
  Button,
  ButtonGroup,
  Field,
  Form,
  Label,
  Message,
  PasswordInput,
  RegisterValidation,
} from '@/components';

const PasswordFormPart = <T extends FieldValues>({
  controls,
  errors,
  isPending,
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
        {errors.password ? <Message>{errors.password.message}</Message> : null}
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
        {errors.confirm ? <Message>{errors.confirm.message}</Message> : null}
      </Field>
      <RegisterValidation passwordRules={passwordRules} />
      <ButtonGroup mt="mt-md" fullWidth>
        <Button
          fullWidth
          isLoading={isPending}
          label="Update Password"
          size="size-lg"
          type="submit"
        />
      </ButtonGroup>
    </Form>
  );
};

export const PasswordForm = memo(PasswordFormPart) as typeof PasswordFormPart;
