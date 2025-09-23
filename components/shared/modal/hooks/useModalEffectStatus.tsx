'use client';
import { UseControlModalProps } from '../types';
import { useEffect } from 'react';

export const useModalEffectStatus = ({
  isPending,
  isSuccess,
  onFailed,
  onSuccess,
  isOpen,
}: UseControlModalProps) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');

    if (isOpen && isSuccess && !isPending && onSuccess) onSuccess();
    if (isOpen && isSuccess === false && !isPending && onFailed) onFailed();
  }, [isPending, isSuccess, isOpen, onFailed, onSuccess]);
};
