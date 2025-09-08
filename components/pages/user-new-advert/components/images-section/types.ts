import { OnError } from '@/components';
import { InputsAvert } from '../../hooks';
import { UseFormReturn } from 'react-hook-form';

export type ImagesSectionProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  deleteUploadedFiles: (
    index: number,
    file:
      | { fileId: string; name: string; url: string; isOriginal?: boolean }
      | File
  ) => void;
  uploadFiles: (files: File[]) => Promise<void>;
  validationInfo: OnError;
};
