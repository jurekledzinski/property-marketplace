'use client';
import { PayloadUpload, useControlUploadFilesProps } from './types';
import { useCallback, useRef, useState } from 'react';

import {
  getFilesSuccessNames,
  getIndexes,
  getResultByStatus,
  pendingRequests,
} from './utils';

const url = '/api/v1/upload';

export const useControlUploadFiles = ({
  limit = 3,
  onAddImages,
  onDeleteImages,
  onUpdateLocalFiles,
}: useControlUploadFilesProps) => {
  const pendingUploadFiles = useRef<File[]>([]);
  const [isUploadPending, setIsUploadPending] = useState(false);

  const uploadFiles = useCallback(
    async (files: File[]) => {
      const index = getIndexes(limit, pendingUploadFiles.current.length);
      pendingUploadFiles.current = files.slice(index.start, index.end);
      setIsUploadPending(true);

      const allPromises = pendingUploadFiles.current.map(async (item) => {
        const formData = new FormData();
        formData.append('files', item);
        return pendingRequests('POST', url, formData, item.name);
      });

      const result = await Promise.allSettled(allPromises);

      if (result) {
        setIsUploadPending(false);
        const { rejectedFiles, successFiles } = getResultByStatus(result);
        const successPayloads = successFiles.map((info) => info.value.payload!);
        const { rejectedNames, successNames } = getFilesSuccessNames(
          successFiles,
          rejectedFiles
        );
        onAddImages(successPayloads);

        const restFiles = files.filter(
          (file) => ![...successNames, ...rejectedNames].includes(file.name)
        );

        onUpdateLocalFiles(restFiles);

        if (pendingUploadFiles.current.length >= 3 || !restFiles.length) {
          pendingUploadFiles.current = [];
        }

        if (restFiles.length) uploadFiles(restFiles);
      }
    },
    [limit, onAddImages, onUpdateLocalFiles]
  );

  const deleteUploadedFiles = useCallback(
    async (index: number, file: PayloadUpload | File) => {
      if (file instanceof File) return;

      onDeleteImages(file);
    },
    [onDeleteImages]
  );

  return { deleteUploadedFiles, isUploadPending, uploadFiles };
};
