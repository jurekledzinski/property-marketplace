import { InputsAvert } from '../../hooks';
import { OnError } from '@/components';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

export type AdvertFormProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  onSubmit: SubmitHandler<InputsAvert>;
  uploadFiles: (files: File[]) => Promise<void>;
  reset: Record<string, string>;
  deleteUploadedFiles: (deletedIds: { fileId: string; name: string }[]) => void;
  validationInfo: OnError;
  isPending?: boolean;
};
