import { ActionState, Countries } from '@/services';
import { InputsAvert } from '@/components';

type AdvertAction = (
  prevState: unknown,
  formData: FormData
) => Promise<ActionState<object>>;

export type UserAdvertProps = {
  advertAction: AdvertAction;
  confirmUrl: string;
  countries: Countries;
  currentUrl: string;
  mode: 'edit' | 'new';
  onBlockLeave: (url: string) => void;
  onConfirmLeave: (url: string) => void;
  onSuccess: (state: ActionState<object>) => void;
  titleHeading: string;
  advert?: InputsAvert | null;
};
