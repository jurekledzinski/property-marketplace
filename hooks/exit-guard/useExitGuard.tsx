'use client';
import { useControlModal } from '@/components';
import { UseExitGuardProps } from './types';
import { usePreventBackNavigation, usePreventLinkNavigation } from '@/hooks';
import { useRef } from 'react';

export const useExitGuard = ({
  confirmUrl,
  currentUrl,
  isDirty,
  onConfirmLeave,
  onBlockLeave,
  selectors,
}: UseExitGuardProps) => {
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

  const onConfirm = () => {
    onConfirmLeave(linkHref.current ? linkHref.current : confirmUrl);
  };

  return { isOpen, onClose, onConfirm };
};
