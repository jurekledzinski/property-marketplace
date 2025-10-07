import { fetchFiles, fetchFilesFailed, fetchFilesResponse } from './fetchFiles';
import { showPromisToast } from '@/utils-client';
import { toastDeleteOptions, toastUploadOptions } from './toastPromiseOptions';
import { tryCatchFiles } from './tryCatch';

export const pendingRequests = (
  method: 'DELETE' | 'POST',
  url: string,
  formData: FormData,
  fileName: string
) => {
  return tryCatchFiles({
    promise: () => fetchFiles(url, method, formData),
    onError: (e) => fetchFilesFailed(e),
    onSuccess: (res) => fetchFilesResponse(res),
    toastPromise: (res) => {
      if (method === 'DELETE') {
        showPromisToast(toastDeleteOptions(res, fileName));
      } else {
        showPromisToast(toastUploadOptions(res, fileName));
      }
    },
  });
};
