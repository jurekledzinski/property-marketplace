'use client';
import { useControlModal } from '@/components';
import { UseExitGuardProps } from './types';
import { usePreventBackNavigation, usePreventLinkNavigation } from '@/hooks';
import { useRef, useState } from 'react';

export const useExitGuard = ({
  confirmUrl,
  currentUrl,
  isDirty,
  onConfirmLeave,
  onBlockLeave,
  selectors,
}: UseExitGuardProps) => {
  const [isLeavePending, setIsLeavePending] = useState(false);
  const linkHref = useRef('');
  const { onClose, onOpen: onOpenModal, isOpen } = useControlModal();

  usePreventBackNavigation({ isDirty, onOpen: onOpenModal });
  usePreventLinkNavigation({
    currentUrl,
    isDirty,
    onOpen: (url, href) => {
      if (href) linkHref.current = href;
      onOpenModal();
      onBlockLeave(url);
    },
    selectors,
  });

  const onConfirm = async () => {
    const { current } = linkHref;
    setIsLeavePending(true);
    const result = await onConfirmLeave(current ? current : confirmUrl);
    if (result) setIsLeavePending(false);
  };

  return { isLeavePending, isOpen, onClose, onConfirm };
};
