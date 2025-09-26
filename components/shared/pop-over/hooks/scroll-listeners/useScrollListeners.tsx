'use client';
import { useEffect } from 'react';
import { UseScrollListenersProps } from './types';

export const useScrollListeners = ({
  getScrollParent,
  getTrigger,
  getTriggerRect,
  id,
  onSetPosition,
  open,
  panelRef,
  placement,
  updateTriggerRect,
}: UseScrollListenersProps) => {
  useEffect(() => {
    if (!panelRef.current) return;

    updateTriggerRect(id);

    const triggerEl = getTrigger(id);

    const scrollParent = getScrollParent(triggerEl);

    const handleScroll = () => {
      if (open) {
        updateTriggerRect(id);
        const rect = getTriggerRect(id);
        const size = { h: window.innerHeight, w: window.innerWidth };
        onSetPosition(placement, size, rect);
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
    id,
    getScrollParent,
    getTrigger,
    getTriggerRect,
    open,
    panelRef,
    placement,
    onSetPosition,
    updateTriggerRect,
  ]);
};
