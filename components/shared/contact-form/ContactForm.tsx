import { ContactFormProps } from './types';
import {
  Form,
  Field,
  TextInput,
  Message,
  ButtonGroup,
  Button,
} from '@/components';

export const ContactForm = ({ controls, onSubmit }: ContactFormProps) => {
  const { formState, register } = controls;
  const { errors } = formState;

  return (
    <Form onSubmit={controls.handleSubmit(onSubmit)} noValidate>
      <Field>
        <TextInput
          {...register('name', {
            required: { message: 'Name is required', value: true },
          })}
          type="text"
          placeholder="Name"
        />
        {errors.name ? (
          <Message variant="error">{errors.name.message}</Message>
        ) : null}
      </Field>

      <Field>
        <TextInput
          {...register('email', {
            required: { message: 'Email is required', value: true },
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email ? (
          <Message variant="error">{errors.email.message}</Message>
        ) : null}
      </Field>

      <Field>
        <TextInput
          as="textarea"
          {...register('message', {
            required: { message: 'Message is required', value: true },
          })}
          placeholder="Message"
        />
        {errors.message ? (
          <Message variant="error">{errors.message.message}</Message>
        ) : null}
      </Field>

      <ButtonGroup mt="mt-md" fullWidth>
        <Button type="submit" label="Send Message" fullWidth size="size-lg" />
      </ButtonGroup>
    </Form>
  );
};
