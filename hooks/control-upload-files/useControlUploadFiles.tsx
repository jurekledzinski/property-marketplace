'use client';
import { ErrorApi } from '@/helpers';
import { ResponseApi, useControlUploadFilesProps } from './types';
import { showPromisToast } from '@/helpers';
import { useCallback, useRef } from 'react';
import { useParams } from 'next/navigation';

// Dodaj isLoadingDelete
// isLoadingUpdate

export const useControlUploadFiles = ({
  limit = 3,
  onAddUrl,
  onDeleteUrl,
  onUpdateLocalFiles,
  onUpdateDeletedIds,
}: useControlUploadFilesProps) => {
  const { advertId } = useParams<{ advertId: string }>();

  const pendingFiels = useRef<File[]>([]);
  const pendingDeletedFiles = useRef<{ fileId: string; name: string }[]>([]);

  const uploadFiles = useCallback(
    async (files: File[]) => {
      const maxPendingFiles = limit - pendingFiels.current.length;
      const startIndex = pendingFiels.current.length;
      const endIndex = maxPendingFiles + pendingFiels.current.length;
      pendingFiels.current = files.slice(startIndex, endIndex);

      const allPromises = pendingFiels.current.map(async (item) => {
        const formData = new FormData();
        formData.append('files', item);

        return new Promise<ResponseApi>((resolve, reject) => {
          const response = fetch(
            `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/v1/upload`,
            {
              method: 'POST',
              cache: 'no-cache',
              body: formData,
            }
          );

          showPromisToast({
            promise: response.then((res) => {
              if (!res.ok) throw new Error();
              return res;
            }),
            name: item.name,
          });

          response
            .then(async (res) => {
              if (res.ok) {
                const data = await res.json();
                resolve({ success: true, payload: data.payload });
              } else {
                const body = await res.json();
                const error = new ErrorApi();
                if (error instanceof ErrorApi) {
                  error.payload = body.payload;
                  throw error;
                }
              }
            })
            .catch((error) => {
              if (error instanceof ErrorApi) {
                reject({ success: false, payload: error.payload });
              }
            });
        });
      });

      const result = await Promise.allSettled(allPromises);

      if (result) {
        const successFiles = result.filter(
          (info) => info.status === 'fulfilled'
        );
        const rejectedFiles = result.filter(
          (info) => info.status === 'rejected'
        );

        const successUrls = successFiles.map((info) => info.value.payload!);

        const successNames = successFiles.map((info) => {
          const { name } = info.value.payload!;
          return name;
        });

        const rejectedNames = rejectedFiles.map(
          (info) => info.reason.payload.name!
        );

        onAddUrl(successUrls);

        const allFilesNames = successNames.concat(rejectedNames);

        const restFiles = files.filter(
          (file) => !allFilesNames.includes(file.name)
        );

        onUpdateLocalFiles(restFiles);

        if (pendingFiels.current.length >= 3 || !restFiles.length) {
          pendingFiels.current = [];
        }

        if (restFiles.length) uploadFiles(restFiles);
      }
    },
    [limit, onAddUrl, onUpdateLocalFiles]
  );

  const removeUploadedFiles = useCallback(
    async (deletedIds: { fileId: string; name: string }[]) => {
      console.log('1 deletedIds', deletedIds);
      console.log('2 pendingDeletedFiles.current', deletedIds);
      const maxPendingFiles = limit - pendingDeletedFiles.current.length;
      const startIndex = pendingDeletedFiles.current.length;
      const endIndex = maxPendingFiles + pendingDeletedFiles.current.length;
      pendingDeletedFiles.current = deletedIds.slice(startIndex, endIndex);

      const allPromises = pendingDeletedFiles.current.map(async (item) => {
        const formData = new FormData();
        formData.append('deleteId', item.fileId);
        formData.append('name', item.name);

        const url = advertId
          ? `/api/v1/upload?id=${advertId}`
          : `/api/v1/upload`;

        return new Promise<ResponseApi>((resolve, reject) => {
          const response = fetch(
            `${process.env.NEXT_PUBLIC_DOMAIN_URL}${url}`,
            {
              method: 'DELETE',
              cache: 'no-cache',
              body: formData,
            }
          );

          showPromisToast({
            promise: response.then((res) => {
              if (!res.ok) throw new Error();
              return res;
            }),
            name: item.name,
            task: 'deleting',
            messageError: 'Could not delete',
            messageSuccess: 'Image deleted',
          });

          response
            .then(async (res) => {
              if (res.ok) {
                const data = await res.json();
                resolve({ success: true, payload: data.payload });
              } else {
                const body = await res.json();
                const error = new ErrorApi();
                if (error instanceof ErrorApi) {
                  error.payload = body.payload;
                  throw error;
                }
              }
            })
            .catch((error) => {
              if (error instanceof ErrorApi) {
                reject({ success: false, payload: error.payload });
              }
            });
        });
      });

      const result = await Promise.allSettled(allPromises);

      console.log('result deleted client', result);

      if (result) {
        const successFiles = result.filter(
          (info) => info.status === 'fulfilled'
        );
        const rejectedFiles = result.filter(
          (info) => info.status === 'rejected'
        );

        const successDeletedIds = successFiles.map(
          (info) => info.value.payload!
        );

        console.log('successDeletedIds', successDeletedIds);

        const ids = successDeletedIds.map((i) => i.fileId);
        console.log('ids', ids);
        const filter = deletedIds.filter((i) => !ids.includes(i.fileId));
        console.log('filter', filter);
        onDeleteUrl(successDeletedIds);
        onUpdateDeletedIds(filter);

        if (pendingDeletedFiles.current.length >= 3 || !filter.length) {
          pendingDeletedFiles.current = [];
        }

        // jeśli w filter  jeśli coś zostanie to  removeUploadedFiles jeszcze raz
        // if(filter.length) removeUploadedFiles
      }

      //Trzeba będzie update images urls onAddUrl
      //Trzeba update deleted ids array także

      //   if()

      //   Trzeba będzie chyba files key zostawić podczas upload files a dopiero niech znika gdy usuwa się tutaj
      // Ponieważ files kontrolują errors size
    },
    [advertId, limit, onDeleteUrl, onUpdateDeletedIds]
  );

  return { removeUploadedFiles, uploadFiles };
};
