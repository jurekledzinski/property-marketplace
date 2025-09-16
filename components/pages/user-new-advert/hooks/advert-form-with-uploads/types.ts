import { InputsAvert } from '../control-advert-form';

export type UseAdvertFormWithUploadsProps = {
  action: (payload: FormData) => void;
  isPending: boolean;
  mode: 'edit' | 'new';
  success?: boolean;
  advert?: InputsAvert | null;
  onSuccess?: () => void;
  onFailed?: () => void;
};
