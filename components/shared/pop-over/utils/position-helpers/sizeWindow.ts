import { SizeWindow } from './types';

export const updateSizeWindow = (
  el: SizeWindow | undefined,
  sizeWindow: React.RefObject<{ width: number; height: number }>
) => {
  if (!sizeWindow.current) return sizeWindow.current ?? { width: 0, height: 0 };

  if (el) {
    sizeWindow.current.height = el.h;
    sizeWindow.current.width = el.w;
  } else {
    sizeWindow.current.width = window.innerWidth;
    sizeWindow.current.height = window.innerHeight;
  }

  return sizeWindow.current;
};
