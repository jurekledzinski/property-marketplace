import { useEffect } from 'react';
import { UsePreventLinkNavigationProps } from './types';

export const usePreventLinkNavigation = ({
  isDirty,
  onOpen,
  idLink,
}: UsePreventLinkNavigationProps) => {
  useEffect(() => {
    const links = document.querySelector(`data-link=${idLink}`);

    if (!isDirty || !links) return;

    if (typeof window !== 'undefined') {
      window.history.pushState(null, document.title, window.location.href);
    }

    const handleClickLink = () => {
      window.history.pushState(null, document.title, window.location.href);
      onOpen();
    };

    links.addEventListener('click', handleClickLink);

    return () => {
      links.removeEventListener('click', handleClickLink);
    };
  }, [idLink, isDirty, onOpen]);
};
