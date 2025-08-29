import { ChangeEvent } from 'react';
import { UseChangeFilesProps } from './types';

export const useChangeFiles = ({ setValue, watch }: UseChangeFilesProps) => {
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

    setValue('files', mergedFiles, {
      shouldValidate: true,
      shouldDirty: false,
    });
  };

  return { onChangeFiles, mergeFiles };
};
