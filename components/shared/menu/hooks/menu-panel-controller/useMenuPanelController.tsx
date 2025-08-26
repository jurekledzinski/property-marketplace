'use client';
import { useAriaAttributes } from '@/hooks';
import { useMenu } from '../../store';
import { UseMenuPanelControllerProps } from './types';
import { usePopOver, usePosition } from '@/components';
import { useRef } from 'react';
import {
  groupArrowProps,
  useEnterExit,
  useMenuPanelProps,
} from '../../components';

export const useMenuPanelController = ({
  id,
  placement,
  ...props
}: UseMenuPanelControllerProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const { mapRefs, open, onCloseAll, getTriggerRect, updateTriggerRect } =
    usePopOver();

  const { onKeyArrow, onKeyArrowNested, onKeyPress, mapPlacements } = useMenu();

  const a11y = useAriaAttributes(id).menuPanelA11y();

  const handlers = useEnterExit({
    mapPlacements,
    mapRefs,
    onCloseAll,
    open,
    panelRef,
    onKeyArrow,
    onKeyArrowNested,
    onKeyPress,
    panelId: id,
    placement,
  });

  const { popoverProps, positionProps } = useMenuPanelProps({
    ...props,
    id,
    open,
    panelRef,
    placement,
    getTriggerRect,
    updateTriggerRect,
  });

  const { arrowPlacement, onSetPosition } = usePosition(positionProps);

  const arrowProps = groupArrowProps(
    { ...props, id, placement },
    arrowPlacement
  );

  return {
    a11y,
    arrowProps,
    handlers,
    popoverProps,
    positionProps,
    getTriggerRect,
    onSetPosition,
  };
};
