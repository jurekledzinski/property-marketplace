import { OnKeyArrow, OnKeyArrowNested, OnKeyPress } from '@/hooks';
import { Size } from '@/types';

export type ContextMenu = {
  mapPlacements: React.RefObject<Map<string, string>>;
  onSelectItem?: (id: string) => void;
  onKeyArrow?: OnKeyArrow;
  onKeyPress?: OnKeyPress;
  onKeyArrowNested?: OnKeyArrowNested;
};

export type MenuProviderProps = {
  children: React.ReactNode;
  onSelectItem?: (id: string) => void;
  size?: Size;
};
