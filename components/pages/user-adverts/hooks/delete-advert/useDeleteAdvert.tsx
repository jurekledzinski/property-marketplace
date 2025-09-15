'use client';
import { deleteAdvert } from '@/actions';
import { startTransition, useRef } from 'react';
import { useActionStateReset } from '@/hooks';
import { useControlModal } from '@/components';

export const useDeleteAdvert = () => {
  const advertId = useRef<string | null>(null);
  const modal = useControlModal();
  const action = useActionStateReset({ fnAction: deleteAdvert });

  const onDelete = (id: string) => {
    advertId.current = id;
    modal.onOpen();
  };

  const onConfirm = () => {
    startTransition(() => {
      if (!advertId.current) return;
      const formData = new FormData();
      formData.append('advertId', advertId.current);
      action.formAction(formData);
    });
  };

  const onSuccess = () => {
    modal.onClose();
    action.resetStateAction();
  };

  return {
    modal,
    action,
    onDelete,
    onConfirm,
    onSuccess,
  };
};
