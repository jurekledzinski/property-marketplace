import { RefObject } from 'react';
import { Placement } from '../../types';
import { SizeWindow } from '../position';

export type UseScrollListenersProps = {
  getScrollParent: (element: HTMLElement | null) => HTMLElement | Window;
  getTrigger: (id: string) => HTMLElement | null;
  getTriggerRect: (id: string) => DOMRect;
  id: string;
  onSetPosition: (
    dynamic?: Placement,
    el?: SizeWindow,
    triggerPosition?: DOMRect
  ) => void;
  open: boolean;
  panelRef: RefObject<HTMLDivElement | null>;
  placement: Placement;
  updateTriggerRect: (id: string) => void;
};
