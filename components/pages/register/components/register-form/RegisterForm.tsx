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
} from '@/components';

export const RegisterForm = ({
  controls,
  passwordRules,
  onSubmit,
}: RegisterFormProps) => {
  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <Field>
        <Label>Name</Label>
        <TextInput />
        <Message>Name is required</Message>
      </Field>
      <Field>
        <Label>Email</Label>
        <TextInput />
        <Message>Email is required</Message>
      </Field>
      <Field>
        <Label>Password</Label>
        <PasswordInput />
        <Message>Email is required</Message>
      </Field>
      <Field>
        <Label>Confirm password</Label>
        <PasswordInput />
        <Message>Confirm password is required</Message>
      </Field>
      <ButtonGroup marginTop={16} fullWidth>
        <Button type="submit" label="Sign In" fullWidth size="size-lg" />
      </ButtonGroup>
    </Form>
  );
};
