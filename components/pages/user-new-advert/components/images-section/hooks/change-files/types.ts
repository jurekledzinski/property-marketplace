import { ChangeEvent, DragEvent } from 'react';

export type UseChangeFilesProps = {
  files: File[];
  uploadFiles: (files: File[]) => Promise<void>;
  onPreValidation: (
    e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>
  ) => string[];
  onSetFiles: (files: File[]) => void;
};
