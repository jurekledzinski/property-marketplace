'use client';
import { PopOver, usePopOver, usePosition } from '@/components';
import { SelectPanelProps } from './types';
import { useAriaAttributes } from '@/hooks';
import { useRef } from 'react';
import { useSelect } from '../../store';

export const SelectPanel = ({ children }: SelectPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const popover = usePopOver();
  const select = useSelect();
  const a11y = useAriaAttributes().selectPanelA11y();

  const { onSetPosition } = usePosition({
    closeOnScroll: select.closeOnScroll,
    id: 'root',
    onCloseOnScroll: (id) => popover.onClose(id),
    open: popover.open.root,
    panelRef,
    placement: 'bottom start',
    getTrigger: popover.getTrigger,
    getTriggerRect: popover.getTriggerRect,
    updateTriggerRect: popover.updateTriggerRect,
  });

  const onKeyboardNavigation = () => {
    const { onKeyArrow, onKeyPress } = select;
    const { onCloseAll } = popover;
    if (!panelRef.current || !onKeyPress || !onKeyArrow) return;
    onKeyPress({ node: panelRef.current, onCloseAll });
    onKeyArrow({ node: panelRef.current });
  };

  return (
    <PopOver
      ref={panelRef}
      open={popover.open.root}
      onEntering={() => {
        const { getTriggerRect } = popover;
        onSetPosition(undefined, undefined, getTriggerRect('root'));
      }}
      onEntered={onKeyboardNavigation}
      onExited={onKeyboardNavigation}
      {...a11y}
    >
      {children}
    </PopOver>
  );
};
