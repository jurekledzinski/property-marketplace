import { PayloadUpload, ResponseApi } from '../types';
import { showPromisToast } from '@/helpers';

export const tryCatchFiles = async ({
  promise,
  onError,
  onSuccess,
  toastPromise,
}: {
  promise: () => Promise<Response>;
  onError: (error: Error) => Promise<ResponseApi<PayloadUpload>>;
  onSuccess: (res: Promise<Response>) => Promise<ResponseApi<PayloadUpload>>;
  toastPromise: (res: Promise<Response>) => ReturnType<typeof showPromisToast>;
}) => {
  try {
    const res = promise();
    toastPromise(res);
    return await onSuccess(res);
  } catch (e) {
    const error = e as Error;
    return onError(error);
  }
};
