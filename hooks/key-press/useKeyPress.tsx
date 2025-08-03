'use client';
import { useCallback, useEffect, useMemo } from 'react';
import { OnKeyPress, UseKeyPressProps } from './types';

export const useKeyPress = ({
  query = '[data-type="item"], [data-type="trigger"]',
  ref,
  onEnter,
  onEscape,
  onSpace,
  onTab,
  onSelectItem,
}: UseKeyPressProps) => {
  const cleanupFns = useMemo<(() => void)[]>(() => [], []);

  const onKeyPress: OnKeyPress = useCallback(
    ({ node, onCloseAll }) => {
      if (!node) return;
      const items = Array.from(node.querySelectorAll<HTMLElement>(query));

      items.forEach((element, index) => {
        const handler = (event: KeyboardEvent) => {
          const id = element.dataset.id;
          const type = element.dataset.type;

          const context = {
            element,
            id,
            items,
            type,
            index,
            onSelectItem,
            onCloseAll,
          };

          switch (event.key) {
            case ' ':
              if (onSpace) onSpace(event, context);
              break;
            case 'Escape':
              if (onEscape) onEscape(event, context);
              break;
            case 'Tab':
              if (onTab) onTab(event, context);
              break;
            case 'Enter':
              if (onEnter) onEnter(event, context);
              break;
          }
        };

        element.addEventListener('keydown', handler);
        cleanupFns.push(() => element.removeEventListener('keydown', handler));
      });
    },
    [cleanupFns, onEnter, onEscape, onSpace, onTab, onSelectItem, query]
  );

  useEffect(() => {
    if (ref && ref.current) onKeyPress({ node: ref.current });
  }, [ref, onKeyPress]);

  useEffect(() => {
    return () => cleanupFns.forEach((fn) => fn());
  }, [cleanupFns]);

  return { onKeyPress };
};
