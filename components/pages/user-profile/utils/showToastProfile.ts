import { showErrorToast, showSuccessToast } from '@/helpers';

export const showToast = (message: string, isSuccess?: boolean) => {
  if (isSuccess) showSuccessToast(message);
  else showErrorToast(message);
};
