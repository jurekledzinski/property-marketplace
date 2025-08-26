import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
  nameConfirm,
  namePassword,
  onSubmit,
  passwordRules,
}: PasswordFormProps<T>) => {
  const { register } = controls;
  console.log('PasswordFormPart');

  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <Field>
        <Label>Password</Label>
        <PasswordInput
          {...register(namePassword, {
            required: { message: 'Password is required', value: true },
            validate: passwordRules.validatePassword,
          })}
          endIcon={[faEye, faEyeSlash]}
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
          endIcon={[faEye, faEyeSlash]}
        />
        {errors.confirm ? <Message>{errors.confirm.message}</Message> : null}
      </Field>
      <RegisterValidation passwordRules={passwordRules} />
      <ButtonGroup mt="mt-md" fullWidth>
        <Button
          type="submit"
          label="Update Password"
          fullWidth
          size="size-lg"
        />
      </ButtonGroup>
    </Form>
  );
};

export const PasswordForm = memo(PasswordFormPart) as typeof PasswordFormPart;
