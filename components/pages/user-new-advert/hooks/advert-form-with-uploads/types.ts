import { InputsAvert } from '../control-advert-form';

export type UseAdvertFormWithUploadsProps = {
  action: (payload: FormData) => void;
  isPending: boolean;
  mode: 'edit' | 'new';
  success: boolean;
  userId: string;
  advert?: InputsAvert | null;
  onSuccess?: () => void;
};
