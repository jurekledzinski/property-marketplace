import { Button, ButtonGroup, Heading } from '@/components';
import { PasswordForm, UserForm } from './components';
import { usePasswordForm, useUserForm } from './hooks';
import { usePasswordRules } from '../register';

export const UserProfile = () => {
  const { formControl: userControl, onSubmit: onSubmitUser } = useUserForm();
  const { formControl: passwordControl, onSubmit: onSubmitPassword } =
    usePasswordForm();
  const passwordRules = usePasswordRules({
    watch: passwordControl.watch,
    nameConfirm: 'confirm',
    namePassword: 'password',
  });

  console.log('USER WATCH', userControl.watch());
  console.log('PASSWORD WATCH', passwordControl.watch());

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Profile
      </Heading>
      <UserForm controls={userControl} onSubmit={onSubmitUser} />
      <PasswordForm
        controls={passwordControl}
        nameConfirm="confirm"
        namePassword="password"
        onSubmit={onSubmitPassword}
        passwordRules={passwordRules}
      />
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Delete account
      </Heading>
      <ButtonGroup>
        <Button label="Delete account" size="size-md" variant="outlined" />
      </ButtonGroup>
    </>
  );
};
