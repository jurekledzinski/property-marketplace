'use client';
import { showPromisToast } from '@/helpers';
import { tryCatchFiles } from './utils/tryCatch';
import { useCallback, useRef } from 'react';
import { useControlUploadFilesProps } from './types';
import { useParams } from 'next/navigation';

import {
  fetchFiles,
  fetchFilesFailed,
  fetchFilesResponse,
  getFilesSuccessNames,
  getIndexes,
  getResultByStatus,
  toastDeleteOptions,
  toastUploadOptions,
} from './utils';

export const useControlUploadFiles = ({
  limit = 3,
  onAddImages,
  onDeleteImages,
  onUpdateLocalFiles,
  onUpdateDeletedIds,
}: useControlUploadFilesProps) => {
  const { advertId } = useParams<{ advertId: string }>();
  const pendingUploadFiles = useRef<File[]>([]);
  const pendingDeleteFiles = useRef<{ fileId: string; name: string }[]>([]);

  const uploadFiles = useCallback(
    async (files: File[]) => {
      console.log('FILES', files);
      console.log('PENDINGFILES', pendingUploadFiles.current);
      const index = getIndexes(limit, pendingUploadFiles.current.length);
      pendingUploadFiles.current = files.slice(index.start, index.end);

      const allPromises = pendingUploadFiles.current.map(async (item) => {
        const formData = new FormData();
        formData.append('files', item);

        return tryCatchFiles({
          promise: () => fetchFiles('/api/v1/upload', 'POST', formData),
          onError: (e) => fetchFilesFailed(e),
          onSuccess: (res) => fetchFilesResponse(res),
          toastPromise: (res) =>
            showPromisToast(toastUploadOptions(res, item.name)),
        });
      });

      const result = await Promise.allSettled(allPromises);
      console.log('result upload', result);

      if (result) {
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

        console.log('restFiles', restFiles);

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
    async (deletedIds: { fileId: string; name: string }[]) => {
      const index = getIndexes(limit, pendingDeleteFiles.current.length);
      pendingDeleteFiles.current = deletedIds.slice(index.start, index.end);

      const allPromises = pendingDeleteFiles.current.map(async (item) => {
        const formData = new FormData();
        formData.append('deleteId', item.fileId);
        formData.append('name', item.name);

        const url = advertId
          ? `/api/v1/upload?id=${advertId}`
          : `/api/v1/upload`;

        return tryCatchFiles({
          promise: () => fetchFiles(url, 'DELETE', formData),
          onError: (e) => fetchFilesFailed(e),
          onSuccess: (res) => fetchFilesResponse(res),
          toastPromise: (res) =>
            showPromisToast(toastDeleteOptions(res, item.name)),
        });
      });

      const result = await Promise.allSettled(allPromises);

      if (result) {
        const { successFiles } = getResultByStatus(result);

        const successPayloads = successFiles.map((info) => info.value.payload!);
        const successIds = successPayloads.map((i) => i.fileId);
        const restFiles = deletedIds.filter(
          (i) => !successIds.includes(i.fileId)
        );

        onDeleteImages(successIds);
        onUpdateDeletedIds(restFiles);

        if (pendingDeleteFiles.current.length >= 3 || !restFiles.length) {
          pendingDeleteFiles.current = [];
        }

        console.log('restIds', restFiles);

        if (restFiles.length) deleteUploadedFiles(restFiles);
      }
    },
    [advertId, limit, onDeleteImages, onUpdateDeletedIds]
  );

  return { deleteUploadedFiles, uploadFiles };
};
