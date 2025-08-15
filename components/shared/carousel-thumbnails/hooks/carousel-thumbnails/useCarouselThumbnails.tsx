'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { GPointerEvents } from './types';

export const useCarouselThumbnails = () => {
  const isMountDown = useRef(false);
  const listRef = useRef<HTMLDivElement>(null);
  const posXStart = useRef(0);
  const posXEnd = useRef(0);
  const [transformX, setTransformX] = useState(0);

  const handleMove = (e: GPointerEvents) => {
    const envTouchEvent = typeof TouchEvent !== 'undefined';
    const touchEvent = envTouchEvent && e instanceof TouchEvent;
    e.preventDefault();

    if (touchEvent && !e.touches[0]) return;

    if (!isMountDown.current || !listRef.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

    const diff = clientX - posXStart.current;

    const max = 50;
    const min = -listRef.current.scrollWidth + listRef.current.clientWidth - 50;

    setTransformX(Math.max(Math.min(diff, max), min));
  };

  const handleEnd = (e: GPointerEvents) => {
    const envTouchEvent = typeof TouchEvent !== 'undefined';
    const envMouseEvent = typeof MouseEvent !== 'undefined';
    const touchEvent = envTouchEvent && e instanceof TouchEvent;
    const mouseEvent = envMouseEvent && e instanceof MouseEvent;

    if (touchEvent && !e.changedTouches[0]) return;

    if (!isMountDown.current || !listRef.current) return;

    if (mouseEvent) e.preventDefault();

    isMountDown.current = false;

    const posXList = listRef.current.offsetLeft;

    if (touchEvent) posXEnd.current = e.changedTouches[0]?.clientX - posXList;
    if (mouseEvent) posXEnd.current = e.clientX - posXList;

    const clientX = 'touches' in e ? e.changedTouches[0]?.clientX : e.clientX;

    const diffStart = clientX - posXStart.current;

    const diffEnd = -listRef.current.scrollWidth + listRef.current.clientWidth;

    if (diffStart > 0) setTransformX(0);
    if (!(diffStart > diffEnd)) setTransformX(diffEnd);
  };

  const handleDown = useCallback(
    (e: GPointerEvents) => {
      const touchEvent = 'touches' in e;
      const mouseEvent = 'button' in e;

      if (touchEvent && !e.touches[0]) return;

      if (mouseEvent) e.preventDefault();

      isMountDown.current = true;

      const clientX = touchEvent ? e.touches[0].clientX : e.clientX;

      posXStart.current = clientX - transformX;
    },
    [transformX]
  );

  const onTouchStart = useCallback(
    (e: GPointerEvents) => {
      if (typeof window === 'undefined') return;

      handleDown(e);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd, { passive: false });
    },
    [handleDown]
  );

  const onMouseDown = useCallback(
    (e: GPointerEvents) => {
      if (typeof window === 'undefined') return;

      handleDown(e);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
    },
    [handleDown]
  );

  const onResize = (e: UIEvent) => {
    e.preventDefault();
    if (!listRef.current) return;

    const diffStart = posXEnd.current - posXStart.current;
    const diffEnd = -listRef.current.scrollWidth + listRef.current.clientWidth;

    if (diffStart > 0) setTransformX(0);
    if (!(diffStart > diffEnd)) setTransformX(diffEnd);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    if (!listRef.current) return;

    listRef.current.addEventListener('touchstart', onTouchStart, {
      passive: true,
    });
    listRef.current.addEventListener('mousedown', onMouseDown);

    const copyListref = listRef.current;

    return () => {
      copyListref.removeEventListener('touchstart', onTouchStart);
      copyListref.removeEventListener('mousedown', onMouseDown);

      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);

      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);

      window.removeEventListener('resize', onResize);
    };
  }, [onMouseDown, onTouchStart]);

  return { ref: listRef, transformX };
};
