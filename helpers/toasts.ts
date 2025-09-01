import toast from 'react-hot-toast';

export const showSuccessToast = (message: string, autoClose?: number) => {
  toast.success(message, { ...(autoClose && { duration: autoClose }) });
};

export const showErrorToast = (message: string, autoClose?: number) => {
  toast.error(message, { ...(autoClose && { duration: autoClose }) });
};

const creatMessage = (message?: string) => (message ?? '').slice(0, 20);
const toastMessage = (message: string) => `${message}`;

export const showPromisToast = <T extends Response>({
  autoClose,
  message,
  promise,
}: {
  promise: Promise<T>;
  message?: string;
  autoClose?: number;
}) => {
  toast.promise(
    promise,
    {
      loading: 'Saving...',
      success: toastMessage(`Image saved ${creatMessage(message)}`),
      error: toastMessage(`Could not save ${creatMessage(message)}`),
    },
    { ...(autoClose && { duration: autoClose }) }
  );
};
