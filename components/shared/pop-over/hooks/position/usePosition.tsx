'use client';
import { arrowFlip } from './helpers';
import { Placement, setPosition } from '@/components';
import { SizeWindow, UsePositionProps } from './types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePanelSize } from '../panel-size';
import { useWindowResize, useWindowScroll } from '@/hooks';

import {
  checkHorizontalSpace,
  checkVerticalSpace,
  getCheckSpace,
  getPanelDirection,
  getPanelRect,
  setNewPosition,
  updateSizeWindow,
} from './helpers';

export const usePosition = ({
  autoWidth = true,
  gap = 8,
  id,
  panelRef,
  placement = 'bottom',
  open,
  type = 'floating',
  getTriggerRect,
  updateTriggerRect,
}: UsePositionProps) => {
  const sizeWindow = useRef({ width: 0, height: 0 });

  const [arrowPlacement, setArrowPlacement] = useState<Placement>(placement);

  const { heightPanel, widthPanel } = usePanelSize(panelRef, open);

  const onFlip = useCallback((value: Placement) => {
    const flip = arrowFlip(value);
    setArrowPlacement((prev) => (prev !== flip ? flip : prev));
  }, []);

  const onSetPosition = useCallback(
    (dynamic?: Placement, el?: SizeWindow, triggerPosition?: DOMRect) => {
      if (type !== 'floating' || !panelRef.current || !triggerPosition) return;

      const size = updateSizeWindow(el, sizeWindow);

      const panelDirection = getPanelDirection(placement, dynamic);

      const panelRect = getPanelRect(panelRef.current, widthPanel, heightPanel);

      const canPlace = getCheckSpace({
        triggerPosition,
        panelWidth: panelRect.panelWidth,
        panelHeight: panelRect.panelHeight,
        gap,
        width: size.width,
        height: size.height,
      });

      const updatedPosition = setPosition({
        currentPlacement: panelDirection.currentPlacement,
        panelPosition: panelRect.panelPosition,
        triggerPosition,
        size,
        panelWidth: panelRect.panelWidth,
        panelHeight: panelRect.panelHeight,
        panelStyle: panelRect.panelStyle,
        autoWidth,
      });

      const horiontalFlip = checkHorizontalSpace({
        canPlaceRight: canPlace.canPlaceRight,
        canPlaceLeft: canPlace.canPlaceLeft,
        mainDirection: panelDirection.mainDirection,
        currentPlacement: panelDirection.currentPlacement,
        mainDefault: placement,
        alignment: panelDirection.alignment,
      });

      if (horiontalFlip) {
        onFlip(horiontalFlip);
        return onSetPosition(horiontalFlip, el, triggerPosition);
      }

      const verticalFlip = checkVerticalSpace({
        canPlaceTop: canPlace.canPlaceTop,
        canPlaceBottom: canPlace.canPlaceBottom,
        mainDirection: panelDirection.mainDirection,
        currentPlacement: panelDirection.currentPlacement,
        mainDefault: placement,
        alignment: panelDirection.alignment,
      });

      if (verticalFlip) {
        onFlip(verticalFlip);
        return onSetPosition(verticalFlip, el, triggerPosition);
      }

      setNewPosition({
        autoWidth,
        gap,
        mainDirection: panelDirection.mainDirection,
        panelRef,
        updatedPosition,
      });
      onFlip(panelDirection.currentPlacement);
    },
    [autoWidth, gap, panelRef, placement, widthPanel, heightPanel, type, onFlip]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sizeWindow.current.width = window.innerWidth;
      sizeWindow.current.height = window.innerHeight;
    }
  }, []);

  useWindowResize({
    onResize: useCallback(() => {
      if (open) {
        updateTriggerRect(id);
        const rect = getTriggerRect(id);
        const size = { h: window.innerHeight, w: window.innerWidth };
        onSetPosition(placement, size, rect);
      } else {
        updateTriggerRect(id);
      }
    }, [getTriggerRect, id, open, onSetPosition, placement, updateTriggerRect]),
  });

  useWindowScroll({
    onScroll: () => updateTriggerRect(id),
  });

  return { arrowPlacement, onSetPosition };
};
