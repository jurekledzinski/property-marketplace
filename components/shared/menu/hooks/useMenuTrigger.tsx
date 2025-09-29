'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PopOver, usePosition, useTriggerRefs } from '@/components';
import { useClickOutside } from '@/hooks';
import { useMenuTriggerProps } from './types';

export const useMenuTrigger = ({
  children,
  id = 'root',
}: useMenuTriggerProps) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const controlTriggers = useTriggerRefs();

  const [menuTrigger, menu] = React.Children.toArray(children);

  useEffect(() => {
    controlTriggers.setTrigger('root', triggerRef.current);
  }, [controlTriggers]);

  const { onSetPosition } = usePosition({
    autoWidth: false,
    closeOnScroll: true,
    id,
    onCloseOnScroll: () => setOpen(false),
    open,
    panelRef,
    placement: 'bottom end',
    getTrigger: controlTriggers.getTrigger,
    getTriggerRect: controlTriggers.getTriggerRect,
    updateTriggerRect: controlTriggers.updateTriggerRect,
  });

  useClickOutside({
    onClick: useCallback(() => setOpen(false), []),
    onLoadRefs: useCallback(
      () => [
        ...Object.entries(controlTriggers.triggers.current)
          .filter(([key]) => key.includes('root'))
          .map((i) => i[1]),
      ],
      [controlTriggers.triggers]
    ),
  });

  return (
    <>
      <div onClick={() => setOpen((prev) => !prev)} ref={triggerRef}>
        {menuTrigger}
      </div>
      <PopOver
        ref={panelRef}
        open={open}
        onEntering={() => {
          const getTriggerRect = controlTriggers.getTriggerRect('root');
          onSetPosition(undefined, undefined, getTriggerRect);
        }}
      >
        {menu}
      </PopOver>
    </>
  );
};
