import { RefObject } from 'react';

export type UseSetKeyMapProps<T extends HTMLElement> = {
  id: string;
  onDeleteKey: (id: string) => void;
  onSetKey: (id: string, node: T | null) => void;
  ref?: RefObject<T | null>;
};
