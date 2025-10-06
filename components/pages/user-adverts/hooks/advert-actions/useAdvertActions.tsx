'use client';
import { deleteAdvert, updateAdvertStatus } from '@/actions';
import { startTransition, useRef } from 'react';
import { useActionStateReset } from '@/hooks';
import { UseAdvertActionsProps } from './types';
import { useControlModal } from '@/components';

export const useAdvertActions = ({
  onFailedDelete,
  onSuccessDelete,
  onSuccessUpdate,
}: UseAdvertActionsProps) => {
  const advertId = useRef<string | null>(null);
  const modal = useControlModal();

  const actionDeleteAdvert = useActionStateReset({
    fnAction: deleteAdvert,
    onResetAction: () => {
      if (actionDeleteAdvert.state.success) onSuccessDelete();
      else onFailedDelete();
    },
  });
  const actionUpdateStatus = useActionStateReset({
    fnAction: updateAdvertStatus,
    autoReset: true,
    onResetAction: onSuccessUpdate,
  });

  const onDelete = (id: string) => {
    advertId.current = id;
    modal.onOpen();
  };

  const onConfirm = () => {
    startTransition(() => {
      if (!advertId.current) return;
      const formData = new FormData();
      formData.append('advertId', advertId.current);
      actionDeleteAdvert.formAction(formData);
    });
  };

  const onSuccess = () => {
    modal.onClose();
    actionDeleteAdvert.resetStateAction();
  };

  const onFailed = () => {
    actionDeleteAdvert.resetStateAction();
  };

  const onActive = (id: string) => {
    startTransition(() => {
      if (!id) return;
      const formData = new FormData();
      formData.append('advertId', id);
      actionUpdateStatus.formAction(formData);
    });
  };

  return {
    modal,
    action: actionDeleteAdvert,
    onActive,
    onDelete,
    onConfirm,
    onFailed,
    onSuccess,
  };
};
