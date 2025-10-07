'use client';
import { deleteAccount, updatePassword, updateProfile } from '@/actions';
import { useActionStateReset } from '@/hooks';
import { UseUserActionsProps } from './types';

export const useUserActions = ({
  onResetDelete,
  onResetPassword,
  onResetProfile,
}: UseUserActionsProps) => {
  const deleteUser = useActionStateReset({
    fnAction: deleteAccount,
    onResetAction: onResetDelete,
  });

  const profile = useActionStateReset({
    fnAction: updateProfile,
    onResetAction: onResetProfile,
  });

  const password = useActionStateReset({
    fnAction: updatePassword,
    onResetAction: onResetPassword,
  });

  return {
    deleteAccount: {
      action: deleteUser.formAction,
      isPending: deleteUser.isPending,
      state: deleteUser.state,
      reset: deleteUser.resetStateAction,
    },
    profile: {
      action: profile.formAction,
      isPending: profile.isPending,
      state: profile.state,
      reset: profile.resetStateAction,
    },
    password: {
      action: password.formAction,
      isPending: password.isPending,
      state: password.state,
      reset: password.resetStateAction,
    },
  };
};
