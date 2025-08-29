import { InputsAvert } from '@/components/pages/user-new-advert/hooks';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

export type UseRemovePreviewFilesProps = {
  setValue: UseFormSetValue<InputsAvert>;
  watch: UseFormWatch<InputsAvert>;
};
