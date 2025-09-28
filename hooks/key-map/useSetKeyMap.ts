'use client';
import { useCallback, useEffect } from 'react';
import { UseSetKeyMapProps } from './types';

export const useSetKeyMap = <T extends HTMLElement = HTMLElement>({
  id,
  onDeleteKey,
  onSetKey,
  ref,
}: UseSetKeyMapProps<T>) => {
  useEffect(() => {
    return () => {
      onDeleteKey?.(id);
    };
  }, [id, onDeleteKey]);

  const onSetKeyMap = useCallback(
    (node: T | null) => {
      if (node) onSetKey(id, node);
      if (ref) ref.current = node;
    },
    [id, onSetKey, ref]
  );

  return onSetKeyMap;
};
