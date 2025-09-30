import { InputsAvert } from '../../hooks';
import { OnError } from '@/components';
import { UseFormReturn } from 'react-hook-form';

type FileObject = {
  fileId: string;
  name: string;
  url: string;
  isOriginal?: boolean;
};

type DeleteUploadedFiles = (index: number, file: FileObject | File) => void;

export type ImagesSectionProps = {
  controls: UseFormReturn<InputsAvert, unknown, InputsAvert>;
  deleteUploadedFiles: DeleteUploadedFiles;
  uploadFiles: (files: File[]) => Promise<void>;
  validationInfo: OnError;
};
