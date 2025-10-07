import { ArrowOptions, CommonDirection, SetDefaultActive } from '../types';

export const setFlatFocusItem = (item: HTMLElement, el: HTMLElement) => {
  if (!el || !item) return;
  el.setAttribute('tabindex', '-1');
  item.setAttribute('tabindex', '0');
  item.focus();
  return;
};

const commonDirection: CommonDirection = (
  event,
  context,
  orientation,
  sign
) => {
  const { direction, items, index, element } = context;

  if (
    direction === orientation &&
    items &&
    typeof index === 'number' &&
    element
  ) {
    event.preventDefault();
    const item = sign === 'plus' ? items[index + 1] : items[index - 1];
    setFlatFocusItem(item, element);
  }
};

export const onLeft: ArrowOptions['onLeft'] = (event, context) => {
  commonDirection(event, context, 'horizontal', 'minus');
};

export const onRight: ArrowOptions['onRight'] = (event, context) => {
  commonDirection(event, context, 'horizontal', 'plus');
};

export const onUp: ArrowOptions['onUp'] = (event, context) => {
  commonDirection(event, context, 'vertical', 'minus');
};

export const onDown: ArrowOptions['onDown'] = (event, context) => {
  commonDirection(event, context, 'vertical', 'plus');
};

export const setDefaultActive: SetDefaultActive = ({
  node,
  element,
  index,
}) => {
  const selected = node.querySelector('[aria-selected="true"]');

  if (selected) {
    (selected as HTMLElement).focus();
  } else {
    element.setAttribute('tabindex', index === 0 ? '0' : '-1');
    if (element.getAttribute('tabindex') === '0') element.focus();
  }
};
