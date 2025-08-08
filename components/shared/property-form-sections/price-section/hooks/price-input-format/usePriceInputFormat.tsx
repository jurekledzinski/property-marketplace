import { EventFocus, PriceFields, UsePriceInputFormatProps } from './types';
import { formatNumber } from '@/helpers';
import { optionsFormat } from '../../utils';
import { useCallback } from 'react';

export const usePriceInputFormat = ({
  onSetValue,
  onBlurFrom,
  onBlurTo,
  onFocusFrom,
  onFocusTo,
}: UsePriceInputFormatProps) => {
  const onFocus = useCallback(
    (name: PriceFields, e: EventFocus) => {
      e.preventDefault();
      e.stopPropagation();
      const value = e.target.value;
      if (name === 'priceFrom') onFocusFrom();
      if (name === 'priceTo') onFocusTo();
      onSetValue({ name, value: value.replace(/[^\d]/g, '') });
    },
    [onFocusFrom, onFocusTo, onSetValue]
  );

  const onBlur = useCallback(
    (name: PriceFields, e: EventFocus) => {
      e.preventDefault();
      e.stopPropagation();
      const value = e.target.value;
      if (name === 'priceFrom') onBlurFrom();
      if (name === 'priceTo') onBlurTo();
      const format = formatNumber(value, 'nl-NL', optionsFormat);
      onSetValue({ name, value: format.format });
    },
    [onBlurFrom, onBlurTo, onSetValue]
  );

  return { onBlur, onFocus };
};
