'use client';
import { EventFocus } from './types';
import { useCallback, useState } from 'react';

export const usePriceInputType = () => {
  const [typePriceFrom, setTypePriceFrom] = useState<'number' | 'text'>('text');
  const [typePriceTo, setTypePriceTo] = useState<'number' | 'text'>('text');

  const onBlurFrom = useCallback((e: EventFocus) => {
    e.preventDefault();
    e.stopPropagation();
    setTypePriceFrom('text');
  }, []);

  const onBlurTo = useCallback((e: EventFocus) => {
    e.preventDefault();
    e.stopPropagation();
    setTypePriceTo('text');
  }, []);

  const onFocusFrom = useCallback((e: EventFocus) => {
    e.preventDefault();
    e.stopPropagation();
    setTypePriceFrom('number');
  }, []);

  const onFocusTo = useCallback((e: EventFocus) => {
    e.preventDefault();
    e.stopPropagation();
    setTypePriceTo('number');
  }, []);

  return {
    typePriceFrom,
    typePriceTo,
    onFocus: { from: onFocusFrom, to: onFocusTo },
    onBlur: { from: onBlurFrom, to: onBlurTo },
  };
};
