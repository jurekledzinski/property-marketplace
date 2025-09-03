import { OnError } from '@/components';
import { InputsAvert } from '../../hooks';
import { UseFormReturn } from 'react-hook-form';

export type ImagesSectionProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  deleteUploadedFiles: (deletedIds: { fileId: string; name: string }[]) => void;
  uploadFiles: (files: File[]) => Promise<void>;
  validationInfo: OnError;
};
