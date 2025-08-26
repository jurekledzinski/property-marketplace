import { UseEnterExitProps } from './types';

export const useEnterExit = ({
  mapPlacements,
  mapRefs,
  onCloseAll,
  onKeyArrow,
  onKeyArrowNested,
  onKeyPress,
  open,
  panelId,
  panelRef,
  placement,
}: UseEnterExitProps) => {
  const onEnteredKeyPress = () => {
    if (!panelRef.current || !onKeyPress) return;
    onKeyPress({ node: panelRef.current, onCloseAll });
  };

  const onEnteredKeyArrow = () => {
    if (!panelRef.current || !onKeyArrow) return;
    onKeyArrow({ node: panelRef.current });
  };

  const onEnteredKeyNested = () => {
    if (
      !panelRef.current ||
      !onKeyArrowNested ||
      !mapPlacements.current ||
      !mapRefs.current
    ) {
      return;
    }

    if (placement) mapPlacements.current.set(panelId, placement);
    mapRefs.current.set(panelId, panelRef.current);
    onKeyArrowNested({ mapPlacements, mapRefs, open, node: panelRef.current });
  };

  const getPrevPanel = () => {
    if (!mapRefs.current || !mapPlacements.current) return;
    mapRefs.current.delete(panelId);
    mapPlacements.current.delete(panelId);

    const openIds = Object.keys(open);
    const openId = openIds.slice(-1);
    if (!openId.length) return;

    const prevPanel = mapRefs.current.get(openId[0]);

    return prevPanel;
  };

  const onExitedKeyPress = () => {
    const prevPanel = getPrevPanel();
    if (!panelRef.current || !onKeyPress || !prevPanel) return;
    onKeyPress({ node: prevPanel, onCloseAll });
  };

  const onExitedKeyArrow = () => {
    const prevPanel = getPrevPanel();
    if (!onKeyArrow || !prevPanel) return;
    onKeyArrow({ node: prevPanel });
  };

  const onExitedKeyNested = () => {
    const prevPanel = getPrevPanel();
    if (!onKeyArrowNested || !prevPanel) return;
    onKeyArrowNested({ mapPlacements, mapRefs, open, node: prevPanel });
  };

  const onEntered = () => {
    onEnteredKeyPress();
    onEnteredKeyArrow();
    onEnteredKeyNested();
  };

  const onExited = () => {
    setTimeout(() => {
      onExitedKeyPress();
      onExitedKeyArrow();
      onExitedKeyNested();
    }, 0);
  };

  return {
    onEntered,
    onExited,
  };
};
