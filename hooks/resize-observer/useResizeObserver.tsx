'use client';
import { useEffect } from 'react';
import { UseResizeObserverProps } from './types';

export const useResizeObserver = <T extends HTMLElement>({
  ref,
  onResize,
}: UseResizeObserverProps<T>) => {
  useEffect(() => {
    const node = ref && 'current' in ref ? ref.current : ref;

    if (!node) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect();
        onResize(rect);
      }
    });

    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, [ref, onResize]);
};
