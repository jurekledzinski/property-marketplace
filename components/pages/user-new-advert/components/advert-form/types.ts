import { InputsAvert } from '../../hooks';
import { OnError } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type AdvertFormProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  deleteUploadedFiles: (
    index: number,
    file:
      | { fileId: string; name: string; url: string; isOriginal?: boolean }
      | File
  ) => void;
  onScrollEndCities: () => void;
  onScrollEndStates: () => void;
  onSubmit: SubmitHandler<InputsAvert>;
  reset: Record<string, string>;
  uploadFiles: (files: File[]) => Promise<void>;
  validationInfo: OnError;
  isPending?: boolean;
  isUploadPending?: boolean;
};
