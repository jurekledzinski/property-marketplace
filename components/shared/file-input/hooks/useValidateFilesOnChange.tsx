import { ChangeEvent, DragEvent } from 'react';
import { FileMimeType } from '@/types';
import { formatFileSize } from '@/utils-client';
import { UseValidateFilesOnChangeProps } from './types';

export const useValidateFilesOnChange = ({
  allowTypes,
  maxAmount,
  maxSize,
  onError,
}: UseValidateFilesOnChangeProps) => {
  const checkFileType = (files: File[]) => {
    const invalidFiles: string[] = [];

    files.forEach((file) => {
      if (!allowTypes.includes(file.type as FileMimeType) && onError) {
        onError({ type: 'type', details: file.type, name: file.name });
        invalidFiles.push(file.name);
      }
    });

    return invalidFiles;
  };

  const checkMaxSize = (files: File[]) => {
    if (!maxSize || maxSize.length < 2) return;
    const invalidFiles: string[] = [];

    files.forEach((file) => {
      const formattedSize = formatFileSize(file.size, maxSize[1]);
      if (parseFloat(formattedSize) > maxSize[0] && onError) {
        onError({ type: 'size', details: formattedSize, name: file.name });
        invalidFiles.push(file.name);
      }
    });

    return invalidFiles;
  };

  const checkMaxAmountFiles = (files: File[]) => {
    if (!maxAmount || !onError) return;
    if (files.length > maxAmount)
      onError({ details: files.length.toString(), type: 'amount' });
  };

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>
  ) => {
    const files = 'dataTransfer' in e ? e.dataTransfer.files : e.target.files;
    if (!files) return [];

    const invalidTypes = checkFileType([...files]);
    const invalidMaxSizes = checkMaxSize([...files]);
    checkMaxAmountFiles([...files]);

    return invalidTypes.concat(invalidMaxSizes ?? []);
  };

  return onChangeInput;
};
