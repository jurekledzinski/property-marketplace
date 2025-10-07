import {
  ArrowNestedOptions,
  GetNextId,
  GetPrevId,
  SetArrowLeft,
  SetArrowRight,
  SetNestedFocusItem,
} from '../types';

export const getNextId: GetNextId = ({ panelId, openIds }) => {
  const currentIndex = openIds.indexOf(panelId);
  if (currentIndex < 0 || currentIndex + 1 >= openIds.length) return;
  return openIds[currentIndex + 1];
};

export const getPrevId: GetPrevId = ({ openIds, panelId }) => {
  const currentIndex = openIds.indexOf(panelId);
  if (currentIndex < 0) return;
  return openIds[currentIndex - 1];
};

export const setArrowRight: SetArrowRight = ({
  elementType,
  panelId,
  openIds,
  mapRefs,
  element,
}) => {
  if (elementType === 'trigger') {
    if (!panelId || !mapRefs.current) return;
    const nextId = getNextId({ openIds, panelId });
    if (!nextId) return;

    const nextPanel = mapRefs.current.get(nextId);

    if (!nextPanel) return;

    const activeIndex = '[tabindex="0"]';
    const focusable = nextPanel.querySelector(activeIndex);
    const focusableElement = focusable as HTMLElement;

    if (focusable) {
      element.setAttribute('tabindex', '-1');
      focusableElement.setAttribute('tabindex', '0');
      focusableElement.focus();
    }

    return;
  }
};

export const setArrowLeft: SetArrowLeft = ({
  element,
  mapRefs,
  openIds,
  panelId,
}) => {
  if (!panelId || !mapRefs.current) return;

  const prevId = getPrevId({ openIds, panelId });

  if (!prevId) return;

  const previousPanel = mapRefs.current.get(prevId);
  const currentPanel = mapRefs.current.get(panelId);

  if (!currentPanel || !previousPanel) return;

  const prevSelector = `[data-id="${panelId}"]`;
  const prevElement = previousPanel.querySelector(prevSelector);
  const prevTrigger = prevElement as HTMLElement;

  const inActiveIndex = '[index="0"]';
  const focusableElement = currentPanel.querySelector(inActiveIndex);
  const focusable = focusableElement as HTMLElement;

  if (!prevTrigger) return;
  element.setAttribute('tabindex', '-1');
  focusable.setAttribute('tabindex', '0');
  prevTrigger.setAttribute('tabindex', '0');
  prevTrigger.focus();

  return;
};

export const setNestedFocusItem: SetNestedFocusItem = ({
  element,
  openIds,
  mapPlacements,
  mapRefs,
  nextValue,
  currValue,
  elementType,
  panelId,
}) => {
  if (!panelId || !mapPlacements.current) return;

  const nextId = getNextId({ openIds, panelId });
  const nextPlacement = mapPlacements.current.get(nextId ?? '');

  if (nextPlacement === nextValue && elementType === 'trigger') {
    setArrowRight({ element, elementType, mapRefs, openIds, panelId });
  }

  const thisPlacement = mapPlacements.current.get(panelId);

  if (thisPlacement === currValue) {
    setArrowLeft({ element, mapRefs, openIds, panelId });
  }
};

export const onLeftNested: ArrowNestedOptions['onLeftNested'] = (
  event,
  context
) => {
  const { direction, element, mapPlacements, mapRefs, open, panelId, type } =
    context;

  const openIds = Object.keys(open);

  if (direction === 'vertical') {
    event.preventDefault();

    setNestedFocusItem({
      currValue: 'right',
      element,
      mapPlacements,
      mapRefs,
      nextValue: 'left',
      openIds,
      elementType: type,
      panelId,
    });
  }
};

export const onRightNested: ArrowNestedOptions['onRightNested'] = (
  event,
  context
) => {
  const { direction, element, mapPlacements, mapRefs, open, panelId, type } =
    context;

  const openIds = Object.keys(open);

  if (direction === 'vertical') {
    event.preventDefault();

    setNestedFocusItem({
      currValue: 'left',
      element,
      mapPlacements,
      mapRefs,
      nextValue: 'right',
      openIds,
      elementType: type,
      panelId,
    });
  }
};
