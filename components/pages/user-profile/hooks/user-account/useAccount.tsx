'use client';
import { UseAccountProps } from './types';
import { usePasswordForm } from '../control-password-form';
import { useUserForm } from '../control-user-form';

export const useAccount = ({
  isPendingPassword,
  isSuccessPassword,
  onSubmitPasswordForm,
  onSuccessPassword,
  isPendingProfile,
  isSuccessProfile,
  onFailedProfile,
  onFailedPassword,
  onSuccessProfile,
  onSubmitProfileForm,
  user,
}: UseAccountProps) => {
  const { formControl: userFormControl, onSubmit: onSubmitUser } = useUserForm({
    isPending: isPendingProfile,
    isSuccess: isSuccessProfile,
    onFailed: onFailedProfile,
    onSubmitForm: onSubmitProfileForm,
    onSuccess: onSuccessProfile,
    user,
  });

  const { formControl: passwordFormControl, onSubmit: onSubmitPassword } =
    usePasswordForm({
      isPending: isPendingPassword,
      isSuccess: isSuccessPassword,
      onFailed: onFailedPassword,
      onSubmitForm: onSubmitPasswordForm,
      onSuccess: onSuccessPassword,
    });

  return {
    controlProfile: {
      form: userFormControl,
      onSubmit: onSubmitUser,
    },
    controlPassword: {
      form: passwordFormControl,
      onSubmit: onSubmitPassword,
    },
  };
};
