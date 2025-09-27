export const getScrollParent = (
  element: HTMLElement | null
): HTMLElement | Window => {
  if (!element) return window;

  let parent: HTMLElement | null = element.parentElement;

  while (parent) {
    const style = getComputedStyle(parent);
    if (
      /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX)
    ) {
      return parent;
    }
    parent = parent.parentElement;
  }

  return window;
};
