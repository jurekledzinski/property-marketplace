'use client';
import { Box, Button, ButtonGroup, Heading } from '@/components';
import { PasswordForm, UserForm } from './components';
import { usePasswordForm, useUserForm } from './hooks';
import { usePasswordRules } from '../register';
import styles from './UserProfile.module.css';

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
      <Box className={styles.container}>
        <UserForm controls={userControl} onSubmit={onSubmitUser} />
        <PasswordForm
          controls={passwordControl}
          nameConfirm="confirm"
          namePassword="password"
          onSubmit={onSubmitPassword}
          passwordRules={passwordRules}
        />
      </Box>
      <Heading level={4} mb="mb-md" mt="mt-md">
        Delete account
      </Heading>
      <ButtonGroup mb="mb-md">
        <Button
          color="negative"
          label="Delete account"
          size="size-md"
          variant="outlined"
        />
      </ButtonGroup>
    </>
  );
};
