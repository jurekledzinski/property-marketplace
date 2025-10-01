'use client';
import { UseControlModalProps } from '../types';
import { useEffect } from 'react';

export const useModalEffectStatus = ({
  isPending,
  isSuccess,
  onFailed,
  onSuccess,
  open,
}: UseControlModalProps) => {
  useEffect(() => {
    if (open) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');

    if (open && isSuccess && !isPending && onSuccess) onSuccess();
    if (open && isSuccess === false && !isPending && onFailed) onFailed();
  }, [isPending, isSuccess, open, onFailed, onSuccess]);
};
