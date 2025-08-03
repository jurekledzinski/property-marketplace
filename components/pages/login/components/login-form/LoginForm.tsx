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

export const LoginForm = () => {
  return (
    <Form noValidate>
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
      <ButtonGroup marginTop={16} fullWidth>
        <Button type="submit" label="Sign In" fullWidth />
      </ButtonGroup>
    </Form>
  );
};
