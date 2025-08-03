import { useCallback, useRef } from 'react';

export const useTriggerRefs = () => {
  const triggerRefs = useRef<Record<string, HTMLElement | null>>({});

  const registerTriggerRef = useCallback(
    (node: HTMLElement | null, id: string) => {
      if (!id) return;
      triggerRefs.current[id] = node;

      if (node) {
        triggerRefs.current[id] = node;
      } else {
        delete triggerRefs.current[id];
      }
    },
    []
  );

  return { triggerRefs, registerTriggerRef };
};
