export type UseResizeObserverProps<T extends HTMLDivElement = HTMLDivElement> =
  {
    ref: React.RefObject<T> | HTMLElement | null;
    onResize: (rect: DOMRect) => void;
  };
