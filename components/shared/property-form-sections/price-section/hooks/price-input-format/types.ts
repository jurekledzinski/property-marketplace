import { FocusEvent } from 'react';

export type PriceFields = 'priceFrom' | 'priceTo';

type Params = {
  name: PriceFields;
  value: string;
};

export type UsePriceInputFormatProps = {
  onFocusFrom: () => void;
  onFocusTo: () => void;
  onBlurFrom: () => void;
  onBlurTo: () => void;
  onSetValue: (params: Params) => void;
};

export type EventFocus = FocusEvent<HTMLInputElement, Element>;
