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
  name,
  promise,
  messageSuccess = 'Image saved',
  messageError = 'Could not save',
  task = 'saving',
}: {
  promise: Promise<T>;
  name?: string;
  messageSuccess?: string;
  messageError?: string;
  autoClose?: number;
  task?: 'deleting' | 'saving' | 'updating';
}) => {
  toast.promise(
    promise,
    {
      loading: `${task.charAt(0) + task.substring(1)}...`,
      success: toastMessage(`${messageSuccess} ${creatMessage(name)}`),
      error: toastMessage(`${messageError} ${creatMessage(name)}`),
    },
    { ...(autoClose && { duration: autoClose }) }
  );
};
