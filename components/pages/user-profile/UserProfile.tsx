'use client';
import styles from './UserProfile.module.css';
import { PasswordForm, UserForm } from './components';
import { signOut } from 'next-auth/react';
import { startTransition } from 'react';
import { useAccount, useUserActions } from './hooks';
import { usePasswordRules } from '../register';
import { UserProfileProps } from './types';

import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Modal,
  showToast,
  useControlModal,
} from '@/components';

export const UserProfile = ({ user }: UserProfileProps) => {
  const { onClose, onOpen, isOpen } = useControlModal();
  const { password, profile, deleteAccount } = useUserActions({
    onResetDelete: () => {
      showToast(deleteAccount.state.message, deleteAccount.state.success);
    },
    onResetPassword: () => {
      showToast(password.state.message, password.state.success);
    },
    onResetProfile: () => {
      showToast(profile.state.message, profile.state.success);
    },
  });

  const { controlPassword, controlProfile } = useAccount({
    isPendingPassword: password.isPending,
    isSuccessPassword: password.state.success,
    onSubmitPasswordForm: password.action,
    onFailedPassword: () => password.reset(),
    onSuccessPassword: () => password.reset(),
    isPendingProfile: profile.isPending,
    isSuccessProfile: profile.state.success,
    onFailedProfile: () => profile.reset(),
    onSuccessProfile: () => profile.reset(),
    onSubmitProfileForm: profile.action,
    user,
  });

  const passwordRules = usePasswordRules({
    watch: controlPassword.form.watch,
    nameConfirm: 'confirm',
    namePassword: 'password',
  });

  console.log('profile', profile.state);

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Profile
      </Heading>
      <Box className={styles.container}>
        <UserForm
          controls={controlProfile.form}
          isPending={!profile.state.message ? profile.isPending : false}
          onSubmit={controlProfile.onSubmit}
        />
        <PasswordForm
          controls={controlPassword.form}
          errors={controlPassword.form.formState.errors}
          isPending={!password.state.message ? password.isPending : false}
          nameConfirm="confirm"
          namePassword="password"
          onSubmit={controlPassword.onSubmit}
          passwordRules={passwordRules}
        />
      </Box>
      <Heading level={4} mb="mb-md" mt="mt-md">
        Delete account
      </Heading>
      <Modal
        confirmText="Delete"
        title="Delete account"
        isPending={
          !deleteAccount.state.message ? deleteAccount.isPending : false
        }
        isOpen={isOpen}
        isSuccess={deleteAccount.state.success}
        onCancel={onClose}
        onClose={onClose}
        onConfirm={() => {
          startTransition(() => deleteAccount.action(new FormData()));
        }}
        onSuccess={async () => {
          console.log('Accound success delete');
          onClose();
          deleteAccount.reset();
          await signOut({ redirect: true, redirectTo: '/' });
        }}
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
