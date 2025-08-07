'use client';
import { OnChangeQuery } from './types';
import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const useSetQuries = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onSetQuery = useCallback(
    (value: string, key: string) => {
      const query = new URLSearchParams(window.location.search);
      const encoded = encodeURIComponent(value);

      if (value) query.set(key, encoded);
      else query.delete(key);

      router.push(`${pathname}?${query.toString()}`);
    },
    [pathname, router]
  );

  const onChange: OnChangeQuery = useCallback(
    (e, key) => {
      if (!key) return e;

      if (typeof e === 'string') onSetQuery(e, key);
      else onSetQuery(e.target.value, key);

      return e;
    },
    [onSetQuery]
  );

  const onClear = useCallback(
    (key: string) => {
      const query = new URLSearchParams(window.location.search);
      query.delete(key);
      router.push(`${pathname}?${query.toString()}`);
    },
    [pathname, router]
  );

  const onClearAll = useCallback(
    (keys: string[]) => {
      const query = new URLSearchParams(window.location.search);
      keys.forEach((key) => {
        query.delete(key);
        router.push(`${pathname}?${query.toString()}`);
      });
    },
    [pathname, router]
  );

  return { onChange, onClear, onClearAll };
};
