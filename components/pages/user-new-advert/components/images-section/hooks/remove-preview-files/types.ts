import { InputsAvert } from '@/components/pages/user-new-advert/hooks';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

export type UseRemovePreviewFilesProps = {
  removeUploadedFiles: (deletedIds: { fileId: string; name: string }[]) => void;
  setValue: UseFormSetValue<InputsAvert>;
  watch: UseFormWatch<InputsAvert>;
};
