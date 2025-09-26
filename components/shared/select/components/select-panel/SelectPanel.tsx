'use client';
import { SelectPanelProps } from './types';
import { useAriaAttributes } from '@/hooks';
import { useRef } from 'react';
import { useSelect } from '../../store';
import { PopOver, usePopOver, usePosition } from '@/components';

export const SelectPanel = ({ children }: SelectPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { getTrigger, getTriggerRect, updateTriggerRect, open, onCloseAll } =
    usePopOver();
  const { onKeyArrow, onKeyPress } = useSelect();

  const a11y = useAriaAttributes().selectPanelA11y();

  const { onSetPosition } = usePosition({
    id: 'root',
    open: open['root'],
    panelRef,
    placement: 'bottom start',
    getTrigger,
    getTriggerRect,
    updateTriggerRect,
  });

  const onKeyboardNavigation = () => {
    if (!panelRef.current || !onKeyPress || !onKeyArrow) return;
    onKeyPress({ node: panelRef.current, onCloseAll });
    onKeyArrow({ node: panelRef.current });
  };

  return (
    <PopOver
      ref={panelRef}
      open={open['root']}
      onEntering={() => {
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
