'use client';
import { useCallback, useRef } from 'react';

export const useTriggerRefs = () => {
  const triggerRefs = useRef<Record<string, HTMLElement | null>>({});
  const triggerRects = useRef<Record<string, DOMRect>>({});

  const registerTriggerRef = useCallback(
    (node: HTMLElement | null, id: string) => {
      if (!id) return;

      if (node) {
        triggerRefs.current[id] = node;
        triggerRects.current[id] = node.getBoundingClientRect();
      } else {
        delete triggerRefs.current[id];
      }
    },
    []
  );

  const getTriggerRect = (id: string) => {
    return triggerRects.current[id];
  };

  const refreshTriggerRect = (id: string) => {
    if (!triggerRefs.current || !triggerRefs.current[id]) return;

    const rect = triggerRefs.current[id].getBoundingClientRect();
    triggerRects.current[id] = rect;
  };

  return {
    getTriggerRect,
    refreshTriggerRect,
    registerTriggerRef,
    triggerRefs,
  };
};
