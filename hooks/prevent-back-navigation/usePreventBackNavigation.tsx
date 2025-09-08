'use client';
import { useEffect } from 'react';
import { UsePreventBackNavigationProps } from './types';

export const usePreventBackNavigation = ({
  isDirty,
  onOpen,
}: UsePreventBackNavigationProps) => {
  useEffect(() => {
    if (!isDirty) return;

    if (typeof window !== 'undefined') {
      window.history.pushState(null, document.title, window.location.href);
    }

    const preventBackButton = (e: PopStateEvent) => {
      if (isDirty) {
        window.history.pushState(null, document.title, window.location.href);
        onOpen();
      } else {
        window.history.back();
      }
    };

    window.addEventListener('popstate', preventBackButton);
    return () => {
      window.removeEventListener('popstate', preventBackButton);
    };
  }, [isDirty, onOpen]);
};
