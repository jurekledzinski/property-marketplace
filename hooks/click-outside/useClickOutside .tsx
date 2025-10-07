'use client';
import { UseClickOutsideProps } from './types';
import { useEffect } from 'react';
import { debounce } from 'lodash';

export const useClickOutside = ({
  onClick,
  onLoadRefs,
}: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = debounce((event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;
      const target = event.target as Node;

      const refs = onLoadRefs();

      const isInside = refs.some(
        (ref) => ref && ref.isConnected && ref.contains(target)
      );

      if (!isInside) onClick();
    }, 50);

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick, onLoadRefs]);
};
