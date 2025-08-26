type Context = {
  panelId?: string;
  type?: string;
  direction: BaseOrientation;
  open: Record<string, boolean>;
  element: HTMLElement;
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  mapPlacements: React.RefObject<Map<string, string>>;
};

export interface ArrowNestedOptions {
  onLeftNested?: (event: KeyboardEvent, context: Context) => void;
  onRightNested?: (event: KeyboardEvent, context: Context) => void;
}

type BaseOrientation = 'horizontal' | 'vertical';

export interface UseArrowNestedNavigationProps extends ArrowNestedOptions {
  defaultOrientation?: BaseOrientation;
  query?: string;
}

export type OnKeyArrowNested = (params: {
  node?: HTMLElement;
  open: Record<string, boolean>;
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  mapPlacements: React.RefObject<Map<string, string>>;
}) => void;

export type SetNestedFocusItem = (params: {
  element: HTMLElement;
  openIds: string[];
  mapPlacements: React.RefObject<Map<string, string>>;
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  nextValue: string;
  currValue: string;
  elementType?: string;
  panelId?: string;
}) => void;

export type GetNextId = (params: {
  panelId: string;
  openIds: string[];
}) => string | undefined;

export type GetPrevId = (params: {
  panelId: string;
  openIds: string[];
}) => string | undefined;

export type SetArrowRight = (params: {
  elementType: string;
  panelId: string;
  openIds: string[];
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  element: HTMLElement;
}) => void;

export type SetArrowLeft = (params: {
  panelId: string;
  openIds: string[];
  mapRefs: React.RefObject<Map<string, HTMLElement>>;
  element: HTMLElement;
}) => void;
