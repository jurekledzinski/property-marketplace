import { UseControlModalProps } from '../types';
import { useEffect } from 'react';

export const useCloseModalOnSuccess = ({
  isPending,
  isSuccess,
  onSuccess,
  isOpen,
}: UseControlModalProps) => {
  useEffect(() => {
    if (isOpen && isSuccess && !isPending && onSuccess) onSuccess();
  }, [isPending, isSuccess, isOpen, onSuccess]);
};
