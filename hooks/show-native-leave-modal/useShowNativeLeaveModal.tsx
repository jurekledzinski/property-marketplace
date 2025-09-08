'use client';
import { useShowNativeLeaveModalProps } from './types';
import { useEffect } from 'react';

export const useShowNativeLeaveModal = ({
  isDirty,
}: useShowNativeLeaveModalProps) => {
  useEffect(() => {
    if (!isDirty) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);
};
