import { ChangeEvent, DragEvent } from 'react';
import { UseChangeFilesProps } from './types';

export const useChangeFiles = ({
  setValue,
  watch,
  uploadFiles,
}: UseChangeFilesProps) => {
  const mergeFiles = (newFiles: File[]) => {
    const fileMap = new Map();
    [...(watch('files') ?? []), ...newFiles].forEach((file) => {
      const key = `${file.name}-${file.size}`;
      fileMap.set(key, file);
    });

    return Array.from(fileMap.values());
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const dropped = Array.from(e.target.files);

    const mergedFiles = mergeFiles(dropped);
    uploadFiles(mergedFiles);

    setValue('files', mergedFiles, {
      shouldValidate: true,
      shouldDirty: false,
    });
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    const dropped = Array.from(e.dataTransfer.files);
    const mergedFiles = mergeFiles(dropped);
    uploadFiles(mergedFiles);

    return mergedFiles;
  };

  return { onChangeFiles, onDrop, mergeFiles };
};
