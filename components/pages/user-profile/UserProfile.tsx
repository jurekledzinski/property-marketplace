'use client';
import styles from './UserProfile.module.css';
import { PasswordForm, UserForm } from './components';
import { usePasswordForm, useUserForm } from './hooks';
import { usePasswordRules } from '../register';

import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Modal,
  useControlModal,
} from '@/components';

export const UserProfile = () => {
  const { onClose, onOpen, isOpen } = useControlModal();
  const { formControl: user, onSubmit: onSubmitUser } = useUserForm();
  const { formControl: password, onSubmit: onSubmitPassword } =
    usePasswordForm();
  const passwordRules = usePasswordRules({
    watch: password.watch,
    nameConfirm: 'confirm',
    namePassword: 'password',
  });

  console.log('USER WATCH', user.watch());
  console.log('PASSWORD WATCH', password.watch());

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Profile
      </Heading>
      <Box className={styles.container}>
        <UserForm controls={user} onSubmit={onSubmitUser} />
        <PasswordForm
          controls={password}
          nameConfirm="confirm"
          namePassword="password"
          onSubmit={onSubmitPassword}
          passwordRules={passwordRules}
        />
      </Box>
      <Heading level={4} mb="mb-md" mt="mt-md">
        Delete account
      </Heading>
      <Modal
        confirmText="Delete"
        title="Delete account"
        isOpen={isOpen}
        onClose={onClose}
        onCancel={onClose}
        variant="negative"
      >
        Are you sure you want to delete your account? <br />
        This action is permanent and cannot be undone. All your data will be
        permanently removed.
      </Modal>
      <ButtonGroup mb="mb-md">
        <Button
          color="negative"
          label="Delete account"
          size="size-md"
          variant="outlined"
          onClick={onOpen}
        />
      </ButtonGroup>
    </>
  );
};
