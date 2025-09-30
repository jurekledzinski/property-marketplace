import { InputsAvert } from '../control-advert-form';

export type UseAdvertFormWithUploadsProps = {
  action: (payload: FormData) => void;
  isPending: boolean;
  mode: 'edit' | 'new';
  advert?: InputsAvert | null;
  onFailed?: () => void;
  onSuccess?: () => void;
  success?: boolean;
};
