'use client';
import { SetQuery, UpdateQuery } from './types';
import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const useSetQuries = () => {
  const router = useRouter();
  const pathname = usePathname();

  const setQuery: SetQuery = useCallback((value, key, query, encoded) => {
    if (value && value.length) query.set(key, encoded);
    else query.delete(key);
    return query;
  }, []);

  const updateQueryParam: UpdateQuery = useCallback(
    (query, e, key) => {
      if (!key) return query;

      if (typeof e === 'string') {
        const encoded = encodeURIComponent(e);
        return setQuery(e, key, query, encoded);
      } else if (Array.isArray(e)) {
        const encoded = encodeURIComponent(e.join(','));
        return setQuery(e, key, query, encoded);
      } else {
        const encoded = encodeURIComponent(e.target.value);
        return setQuery(e.target.value, key, query, encoded);
      }
    },
    [setQuery]
  );

  const setQueryObject = <T extends object>(obj: T) => {
    let query = new URLSearchParams(window.location.search);

    for (const key in obj) {
      const value = obj[key] as string | string[];
      query = updateQueryParam(query, value, key);
    }

    router.push(`${pathname}?${query.toString()}`, { scroll: false });
  };

  const setQueryString = (e: string, key: string) => {
    let query = new URLSearchParams(window.location.search);

    query = updateQueryParam(query, e, key);

    router.push(`${pathname}?${query.toString()}`, { scroll: false });
  };

  const onClear = useCallback(
    (key: string) => {
      const query = new URLSearchParams(window.location.search);
      query.delete(key);
      router.push(`${pathname}?${query.toString()}`, { scroll: false });
    },
    [pathname, router]
  );

  const onClearAll = useCallback(
    (keys: string[]) => {
      const query = new URLSearchParams(window.location.search);
      keys.forEach((key) => query.delete(key));
      router.push(`${pathname}?${query.toString()}`, { scroll: false });
    },
    [pathname, router]
  );

  return { onClear, onClearAll, setQueryObject, setQueryString };
};
