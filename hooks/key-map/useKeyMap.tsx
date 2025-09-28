'use client';
import { useCallback, useMemo, useRef } from 'react';

export const useKeyMap = <T extends HTMLElement | string>() => {
  const mapKeys = useRef(new Map<string, T>());

  const onSetKey = useCallback((id: string, ref: T | null) => {
    if (!ref) return;
    mapKeys.current.set(id, ref);
  }, []);

  const onDeleteKey = useCallback((id: string) => {
    mapKeys.current.delete(id);
  }, []);

  return useMemo(
    () => ({ mapKeys, onDeleteKey, onSetKey }),
    [onDeleteKey, onSetKey]
  );
};
