import { RefObject } from 'react';

type Context = {
  id?: string;
  type?: string;
  index?: number;
  direction?: BaseOrientation;
  items?: HTMLElement[];
  element?: HTMLElement;
};

export interface ArrowOptions {
  onLeft?: (event: KeyboardEvent, context: Context) => void;
  onRight?: (event: KeyboardEvent, context: Context) => void;
  onUp?: (event: KeyboardEvent, context: Context) => void;
  onDown?: (event: KeyboardEvent, context: Context) => void;
}

type BaseOrientation = 'horizontal' | 'vertical';

export interface UseArrowNavigationProps extends ArrowOptions {
  defaultOrientation?: BaseOrientation;
  query?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

export type OnKeyArrow = (params: {
  node?: HTMLElement;
  orientation?: BaseOrientation;
}) => void;

export type CommonDirection = (
  event: KeyboardEvent,
  context: Context,
  orientation: BaseOrientation,
  sign: 'minus' | 'plus'
) => void;

export type SetDefaultActive = (params: {
  node: HTMLElement;
  element: HTMLElement;
  index: number;
}) => void;
