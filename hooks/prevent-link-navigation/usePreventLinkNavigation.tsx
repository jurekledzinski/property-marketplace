'use client';
import { useEffect } from 'react';
import { UsePreventLinkNavigationProps } from './types';

export const usePreventLinkNavigation = ({
  currentUrl,
  isDirty,
  onOpen,
  selectors,
}: UsePreventLinkNavigationProps) => {
  useEffect(() => {
    if (!isDirty || !selectors.length) return;

    const handleClickElement = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLLinkElement).getAttribute('href');
      onOpen(currentUrl, href);
    };

    for (const value of selectors) {
      const listElements = document.querySelectorAll(`[data-link="${value}"]`);

      for (const element of listElements) {
        element.addEventListener('click', handleClickElement);

        return () => {
          element.removeEventListener('click', handleClickElement);
        };
      }
    }
  }, [currentUrl, isDirty, onOpen, selectors]);
};
