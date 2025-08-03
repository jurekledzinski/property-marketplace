'use client';
import { useRef } from 'react';

export const useKeyMap = <T extends HTMLElement | string>() => {
  const mapKeys = useRef(new Map<string, T>());

  const onSetKey = (id: string, ref: T) => {
    mapKeys.current.set(id, ref);
  };

  const onDeleteKey = (id: string) => {
    mapKeys.current.delete(id);
  };

  return { mapKeys, onDeleteKey, onSetKey };
};
