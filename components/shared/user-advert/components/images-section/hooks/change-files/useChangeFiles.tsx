import { ChangeEvent, DragEvent } from 'react';
import { UseChangeFilesProps } from './types';

export const useChangeFiles = ({
  files,
  onPreValidation,
  onSetFiles,
  uploadFiles,
}: UseChangeFilesProps) => {
  const mergeFiles = (newFiles: File[]) => {
    const fileMap = new Map<string, File>();
    [...(files ?? []), ...newFiles].forEach((file) => {
      const key = `${file.name}-${file.size}`;
      fileMap.set(key, file);
    });

    return Array.from(fileMap.values());
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const invalidFiles = onPreValidation(e);

    const filterFiles = Array.from(e.target.files).filter(
      (file) => !invalidFiles.includes(file.name)
    );

    const mergedFiles = mergeFiles(filterFiles);

    if (!mergedFiles.length) return;

    uploadFiles(mergedFiles);
    onSetFiles(mergedFiles);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    const invalidFiles = onPreValidation(e);

    const filterFiles = Array.from(e.dataTransfer.files).filter(
      (file) => !invalidFiles.includes(file.name)
    );

    const mergedFiles = mergeFiles(filterFiles);

    if (!mergedFiles.length) return;

    uploadFiles(mergedFiles);
    onSetFiles(mergedFiles);

    return mergedFiles;
  };

  return { onChangeFiles, onDrop, mergeFiles };
};
