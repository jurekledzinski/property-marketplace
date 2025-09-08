import { InputsAvert } from '../../hooks';
import { OnError } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type AdvertFormProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  onSubmit: SubmitHandler<InputsAvert>;
  uploadFiles: (files: File[]) => Promise<void>;
  reset: Record<string, string>;
  deleteUploadedFiles: (
    index: number,
    file:
      | { fileId: string; name: string; url: string; isOriginal?: boolean }
      | File
  ) => void;
  validationInfo: OnError;
  isPending?: boolean;
};
