import { InputsAvert } from '../../hooks';
import { UseFormReturn } from 'react-hook-form';

export type ImagesSectionProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  removeUploadedFiles: (deletedIds: { fileId: string; name: string }[]) => void;
  uploadFiles: (files: File[]) => Promise<void>;
};
