'use client';
import { useCallback, useRef } from 'react';

export const useTriggerRefs = () => {
  const triggers = useRef<Record<string, HTMLElement | null>>({});
  const triggerRects = useRef<Record<string, DOMRect>>({});

  const setTrigger = useCallback((id: string, node: HTMLElement | null) => {
    if (!id) return;

    if (node) {
      triggers.current[id] = node;
      triggerRects.current[id] = node.getBoundingClientRect();
    } else {
      delete triggers.current[id];
    }
  }, []);

  const getTrigger = useCallback((id: string) => {
    return triggers.current[id];
  }, []);

  const getTriggerRect = useCallback((id: string) => {
    return triggerRects.current[id];
  }, []);

  const updateTriggerRect = useCallback((id: string) => {
    if (!triggers.current || !triggers.current[id]) return;

    const rect = triggers.current[id].getBoundingClientRect();
    triggerRects.current[id] = rect;
  }, []);

  return {
    getTrigger,
    getTriggerRect,
    updateTriggerRect,
    setTrigger,
    triggers,
  };
};
