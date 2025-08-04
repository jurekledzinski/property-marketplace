'use client';
import { arrowFlip } from './helpers';
import { Placement, setPosition } from '@/components';
import { SizeWindow, UsePositionProps } from './types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePanelSize } from '../panel-size';
import { useWindowResize } from '@/hooks';

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
  autoWidth = false,
  gap = 8,
  id,
  panelRef,
  placement = 'bottom',
  triggerRefs,
  open,
  type = 'floating',
}: UsePositionProps) => {
  const sizeWindow = useRef({ width: 0, height: 0 });
  const [arrowPlacement, setArrowPlacement] = useState<Placement>(placement);

  const { heightPanel, widthPanel } = usePanelSize(panelRef, open);

  const onFlip = useCallback((value: Placement) => {
    const flip = arrowFlip(value);
    setArrowPlacement((prev) => (prev !== flip ? flip : prev));
  }, []);

  const onSetPosition = useCallback(
    (dynamic?: Placement, el?: SizeWindow) => {
      if (type !== 'floating') return;
      if (!panelRef.current || !triggerRefs.current || !triggerRefs.current[id])
        return;

      const size = updateSizeWindow(el, sizeWindow);

      const panelDirection = getPanelDirection(placement, dynamic);

      const triggerRef = triggerRefs.current[id];
      const triggerPosition = triggerRef.getBoundingClientRect();

      const panelRect = getPanelRect(panelRef.current, widthPanel, heightPanel);

      const canPlace = getCheckSpace({
        triggerPosition,
        panelWidth: panelRect.panelWidth,
        panelHeight: panelRect.panelHeight,
        gap,
        width: size.width,
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
        return onSetPosition(horiontalFlip);
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
        return onSetPosition(verticalFlip);
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
    [
      autoWidth,
      gap,
      id,
      panelRef,
      placement,
      triggerRefs,
      widthPanel,
      heightPanel,
      type,
      onFlip,
    ]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sizeWindow.current.width = window.innerWidth;
      sizeWindow.current.height = window.innerHeight;
    }
  }, []);

  useWindowResize({
    onResize: useCallback(
      (el) => {
        if (open) {
          onSetPosition(placement, {
            h: el.scrollHeight,
            w: el.offsetWidth,
          });
        }
      },
      [open, onSetPosition, placement]
    ),
  });

  return { arrowPlacement, onSetPosition };
};
