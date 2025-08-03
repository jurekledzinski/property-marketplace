import { RefObject } from 'react';

type Context = {
  element: HTMLElement;
  id?: string;
  type?: string;
  index?: number;
  items: HTMLElement[];
  onSelectItem?: (id: string) => void;
  onCloseAll?: () => void;
};

export interface PressOptions {
  onEnter?: (event: KeyboardEvent, context: Context) => void;
  onEscape?: (event: KeyboardEvent, context: Context) => void;
  onSpace?: (event: KeyboardEvent, context: Context) => void;
  onTab?: (event: KeyboardEvent, context: Context) => void;
  trapFocus?: (event: KeyboardEvent, context: Context) => void;
}

export interface UseKeyPressProps extends PressOptions {
  id?: string;
  open?: Record<string, boolean>;
  query?: string;
  ref?: RefObject<HTMLDivElement | null>;
  onSelectItem?: (id: string) => void;
}

export type OnKeyPress = (params: {
  node?: HTMLElement;
  onCloseAll?: () => void;
}) => void;
