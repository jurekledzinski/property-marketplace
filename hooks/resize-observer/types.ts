export type UseResizeObserverProps<T extends HTMLElement> = {
  ref: React.RefObject<T | null> | HTMLElement | null;
  onResize: (rect: DOMRect) => void;
};
