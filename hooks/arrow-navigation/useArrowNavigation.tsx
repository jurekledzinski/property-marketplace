import { OnKeyArrow, UseArrowNavigationProps } from './types';
import { setDefaultActive } from './utils';
import { useCallback, useEffect, useMemo } from 'react';

export const useArrowNavigation = ({
  defaultOrientation = 'vertical',
  query = '[data-type="item"], [data-type="trigger"]',
  ref,
  onDown,
  onUp,
  onLeft,
  onRight,
}: UseArrowNavigationProps) => {
  const cleanupFns = useMemo<(() => void)[]>(() => [], []);

  const onKeyArrow: OnKeyArrow = useCallback(
    ({ node, orientation }) => {
      if (!node) return;
      const direction = orientation ?? defaultOrientation;

      const items = Array.from(node.querySelectorAll<HTMLElement>(query));

      items.forEach((element, index) => {
        setDefaultActive({ node, element, index });

        const handler = (event: KeyboardEvent) => {
          const id = element.dataset.id;
          const type = element.dataset.type;

          const context = { id, type, index, direction, items, element };

          switch (event.key) {
            case 'ArrowDown':
              if (onDown) onDown(event, context);
              break;
            case 'ArrowUp':
              if (onUp) onUp(event, context);
              break;
            case 'ArrowLeft':
              if (onLeft) onLeft(event, context);
              break;
            case 'ArrowRight':
              if (onRight) onRight(event, context);
              break;
          }
        };

        element.addEventListener('keydown', handler);
        cleanupFns.push(() => element.removeEventListener('keydown', handler));
      });
    },
    [defaultOrientation, cleanupFns, query, onDown, onLeft, onRight, onUp]
  );

  useEffect(() => {
    if (ref?.current) {
      const node = ref.current;
      const orientation = defaultOrientation;

      onKeyArrow({ node, orientation });
    }
  }, [defaultOrientation, ref, onKeyArrow]);

  useEffect(() => {
    return () => cleanupFns.forEach((fn) => fn());
  }, [cleanupFns]);

  return { onKeyArrow };
};
