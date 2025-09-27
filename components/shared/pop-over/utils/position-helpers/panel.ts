import { Placement } from '../../types';

export const getPanelRect = (
  panelRef: HTMLDivElement,
  widthPanel: React.RefObject<number | undefined>,
  heightPanel: React.RefObject<number | undefined>
) => {
  const panelPosition = panelRef.getBoundingClientRect();
  const panelWidth = widthPanel.current ?? panelRef.offsetWidth;
  const panelHeight = heightPanel.current ?? panelRef.offsetHeight;
  const panelStyle = window.getComputedStyle(panelRef);
  return { panelPosition, panelHeight, panelWidth, panelStyle };
};

export const getPanelDirection = (
  placement: Placement,
  dynamic: Placement | undefined
) => {
  const currentPlacement = dynamic ?? placement;
  const mainDirection = dynamic?.split(' ')[0] ?? placement.split(' ')[0];
  const alignment = dynamic?.split(' ')[1] ?? placement?.split(' ')[1];

  return { currentPlacement, mainDirection, alignment };
};
