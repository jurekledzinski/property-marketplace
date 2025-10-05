'use client';
import { useEffect, useRef } from 'react';
import { UseInfiniteScrollProps } from './types';

const tolerance = 50;
const timeout = 300;

export const useInfiniteScroll = <T extends HTMLElement>({
  isLoading,
  ref,
  onScrollEnd,
}: UseInfiniteScrollProps<T>) => {
  const localRef = useRef<T>(null);
  const ticking = useRef(false);
  const timeOutId = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    const currentREf = ref ? ref : localRef;

    if (!currentREf || !currentREf.current || isLoading) return;

    const scrolledElement = currentREf.current;

    const onScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight;
      const targetHeight = target.offsetHeight;

      if (scrollHeight < scrollHeight) {
        scrolledElement.removeEventListener('scroll', onScroll);
      }

      if (scrollTop >= scrollHeight - targetHeight - tolerance) {
        if (ticking.current) return;

        timeOutId.current = setTimeout(() => {
          if (onScrollEnd) onScrollEnd();
          ticking.current = false;
        }, timeout);

        ticking.current = true;
      }
    };

    scrolledElement.addEventListener('scroll', onScroll);

    const copyTimeoutId = timeOutId.current;

    return () => {
      scrolledElement.removeEventListener('scroll', onScroll);
      clearTimeout(copyTimeoutId);
    };
  }, [isLoading, onScrollEnd, ref]);

  return { localRef };
};
