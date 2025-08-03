import { useLayoutEffect, useRef } from 'react';

export const usePanelSize = (
  panelRef: React.RefObject<HTMLDivElement | null>,
  open: boolean
) => {
  const widthPanel = useRef<number>(undefined);
  const heightPanel = useRef<number>(undefined);

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    widthPanel.current = panelRef.current.offsetWidth;
    heightPanel.current = panelRef.current.offsetHeight;
  }, [panelRef, open]);

  return { widthPanel, heightPanel };
};
