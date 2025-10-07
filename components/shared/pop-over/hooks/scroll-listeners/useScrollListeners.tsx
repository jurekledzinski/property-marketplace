'use client';
import { useEffect } from 'react';
import { UseScrollListenersProps } from './types';

export const useScrollListeners = ({
  closeOnScroll,
  getScrollParent,
  getTrigger,
  getTriggerRect,
  id,
  onCloseOnScroll,
  onSetPosition,
  open,
  panelRef,
  placement,
  updateTriggerRect,
}: UseScrollListenersProps) => {
  useEffect(() => {
    if (!panelRef.current || !open) return;

    updateTriggerRect(id);

    const triggerEl = getTrigger(id);

    const scrollParent = getScrollParent(triggerEl);

    const handleScroll = () => {
      if (!closeOnScroll) {
        updateTriggerRect(id);
        const rect = getTriggerRect(id);
        const size = { h: window.innerHeight, w: window.innerWidth };
        onSetPosition(placement, size, rect);
      } else {
        onCloseOnScroll(id);
      }
    };

    scrollParent.addEventListener('scroll', handleScroll, { passive: true });

    if (scrollParent !== window) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      scrollParent.removeEventListener('scroll', handleScroll);

      if (scrollParent !== window) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [
    closeOnScroll,
    id,
    getScrollParent,
    getTrigger,
    getTriggerRect,
    onCloseOnScroll,
    open,
    panelRef,
    placement,
    onSetPosition,
    updateTriggerRect,
  ]);
};
