type Parameters = {
  alignment: string;
  autoWidth?: boolean;
  heightWindow: number;
  panelPosition: DOMRect;
  widthWindow: number;
  triggerPosition: DOMRect;
  panelWidth: number;
  panelHeight: number;
  panelStyle: CSSStyleDeclaration;
};

export type ReturnPosition = { x: number; y: number; w: number };

export type SetBottom = ({
  panelPosition,
  triggerPosition,
}: Omit<
  Parameters,
  'heightWindow' | 'panelStyle' | 'widthWindow'
>) => ReturnPosition;

export type SetTop = ({
  panelPosition,
  triggerPosition,
}: Omit<
  Parameters,
  'heightWindow' | 'panelStyle' | 'widthWindow'
>) => ReturnPosition;

export type SetLeft = ({
  panelPosition,
  triggerPosition,
}: Omit<Parameters, 'heightWindow' | 'widthWindow'>) => ReturnPosition;

export type SetRight = ({
  triggerPosition,
}: Omit<Parameters, 'heightWindow' | 'widthWindow'>) => ReturnPosition;
