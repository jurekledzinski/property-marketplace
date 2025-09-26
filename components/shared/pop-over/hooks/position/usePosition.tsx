'use client';
import { arrowFlip } from './helpers';
import { getScrollParent } from './scrollParent';
import { Placement, setPosition, useScrollListeners } from '@/components';
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
  autoWidth = true,
  gap = 8,
  id,
  panelRef,
  placement = 'bottom',
  open,
  type = 'floating',
  getTrigger,
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

  //   function getScrollParent(element: HTMLElement | null): HTMLElement | Window {
  //     if (!element) return window;
  //     let parent: HTMLElement | null = element.parentElement;
  //     while (parent) {
  //       const style = getComputedStyle(parent);
  //       if (
  //         /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX)
  //       ) {
  //         return parent;
  //       }
  //       parent = parent.parentElement;
  //     }
  //     return window;
  //   }

  useScrollListeners({
    getScrollParent,
    getTrigger,
    getTriggerRect,
    id,
    onSetPosition,
    open,
    panelRef,
    placement,
    updateTriggerRect,
  });

  //   useEffect(() => {
  //     if (!panelRef.current) return;

  //     updateTriggerRect(id);

  //     const triggerEl = getTrigger(id);

  //     const scrollParent = getScrollParent(triggerEl);

  //     console.log('scrollParent', scrollParent);

  //     const handleScroll = () => {
  //       if (open) {
  //         console.log('SSSS');
  //         updateTriggerRect(id);
  //         const rect = getTriggerRect(id);
  //         const size = { h: window.innerHeight, w: window.innerWidth };
  //         onSetPosition(placement, size, rect);
  //       }
  //     };

  //     scrollParent.addEventListener('scroll', handleScroll, { passive: true });
  //     if (scrollParent !== window) {
  //       window.addEventListener('scroll', handleScroll, { passive: true });
  //     }

  //     return () => {
  //       scrollParent.removeEventListener('scroll', handleScroll);
  //       if (scrollParent !== window) {
  //         window.removeEventListener('scroll', handleScroll);
  //       }
  //     };
  //   }, [
  //     open,
  //     id,
  //     getTrigger,
  //     getTriggerRect,
  //     panelRef,
  //     placement,
  //     onSetPosition,
  //     updateTriggerRect,
  //   ]);

  //   useWindowScroll({
  //     onScroll: () => {
  //       if (open) {
  //         updateTriggerRect(id);
  //         const rect = getTriggerRect(id);
  //         const size = { h: window.innerHeight, w: window.innerWidth };
  //         onSetPosition(placement, size, rect);
  //       } else {
  //         updateTriggerRect(id);
  //       }
  //     },
  //   });

  return { arrowPlacement, onSetPosition };
};
