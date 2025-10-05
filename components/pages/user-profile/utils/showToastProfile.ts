import { showErrorToast, showSuccessToast } from '@/utils-client';

export const showToast = (message: string, isSuccess?: boolean) => {
  if (isSuccess) showSuccessToast(message);
  else showErrorToast(message);
};
