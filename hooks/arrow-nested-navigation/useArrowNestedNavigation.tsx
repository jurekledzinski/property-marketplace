'use client';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { OnKeyArrowNested, UseArrowNestedNavigationProps } from './types';

export const useArrowNestedNavigation = ({
  defaultOrientation = 'vertical',
  query = '[data-type="item"], [data-type="trigger"]',
  onLeftNested,
  onRightNested,
}: UseArrowNestedNavigationProps) => {
  const currentOpen = useRef<Record<string, boolean>>({});
  const cleanupFns = useMemo<(() => void)[]>(() => [], []);

  const onKeyArrowNested: OnKeyArrowNested = useCallback(
    ({ node, open, mapPlacements, mapRefs }) => {
      currentOpen.current = open;
      if (!node) return;

      const direction = defaultOrientation;
      const panelId = (node as HTMLElement).dataset.id;

      const items = Array.from(node.querySelectorAll<HTMLElement>(query));

      items.forEach((element, index) => {
        element.setAttribute('tabindex', index === 0 ? '0' : '-1');
        element.setAttribute('index', `${index}`);

        const handler = (event: KeyboardEvent) => {
          const type = element.dataset.type;

          const context = {
            panelId,
            type,
            direction,
            open: currentOpen.current,
            element,
            mapPlacements,
            mapRefs,
          };

          switch (event.key) {
            case 'ArrowLeft':
              if (onLeftNested) onLeftNested(event, context);
              break;
            case 'ArrowRight':
              if (onRightNested) onRightNested(event, context);
              break;
          }
        };

        element.addEventListener('keydown', handler);
        cleanupFns.push(() => element.removeEventListener('keydown', handler));
      });
    },
    [defaultOrientation, cleanupFns, query, onLeftNested, onRightNested]
  );

  useEffect(() => {
    return () => cleanupFns.forEach((fn) => fn());
  }, [cleanupFns]);

  return { onKeyArrowNested };
};
