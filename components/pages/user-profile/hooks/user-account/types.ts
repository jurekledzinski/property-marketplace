import { InputsUser } from '../control-user-form';

export type UseAccountProps = {
  isPendingPassword: boolean;
  isPendingProfile: boolean;
  isSuccessPassword?: boolean;
  isSuccessProfile?: boolean;
  onSubmitPasswordForm: (payload: FormData) => void;
  onSubmitProfileForm: (payload: FormData) => void;
  user: (InputsUser & { id: string }) | null;
  onFailedProfile?: () => void;
  onFailedPassword?: () => void;
  onSuccessPassword?: () => void;
  onSuccessProfile?: () => void;
};
