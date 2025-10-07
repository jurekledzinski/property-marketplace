import { User } from '@/models';

export type InputsUser = Omit<User, 'password'>;

export type UseUserFormProps = {
  isPending: boolean;
  isSuccess?: boolean;
  onSubmitForm: (payload: FormData) => void;
  user: (InputsUser & { id: string }) | null;
  onFailed?: () => void;
  onSuccess?: () => void;
};
