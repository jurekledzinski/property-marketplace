import { ErrorApi } from '@/helpers';
import { ResponseApi, useControlUploadFilesProps } from './types';
import { showPromisToast } from '@/helpers';
import { useCallback, useRef } from 'react';

export const useControlUploadFiles = ({
  limit = 3,
  onAddUrl,
  onUpdateLocalFiles,
}: useControlUploadFilesProps) => {
  const pendingFiels = useRef<File[]>([]);

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
            message: item.name,
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

        const successUrls = successFiles.map((info) => {
          const { fileId, url } = info.value.payload!;
          return { fileId, url };
        });

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

  const removeUploadedFiles = useCallback(() => {}, []);

  return { removeUploadedFiles, uploadFiles };
};
