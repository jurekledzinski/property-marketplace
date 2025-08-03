import { PressOptions } from '../types';
import { setFlatFocusItem } from '../../arrow-navigation';

const commonConfirm: PressOptions['onEnter'] = (event, context) => {
  const { id, type, onCloseAll, onSelectItem } = context;

  if (id && type !== 'trigger' && onSelectItem) {
    event.preventDefault();
    onSelectItem(id);
  }

  if (id && type !== 'trigger' && onCloseAll) {
    event.preventDefault();
    onCloseAll();
  }
};

export const onEnter: PressOptions['onEnter'] = (event, context) => {
  commonConfirm(event, context);
};

export const onEscape: PressOptions['onEscape'] = (event, context) => {
  event.preventDefault();

  const { onCloseAll } = context;

  if (onCloseAll) onCloseAll();
};

export const onSpace: PressOptions['onSpace'] = (event, context) => {
  commonConfirm(event, context);
};

export const trapFocus: PressOptions['trapFocus'] = (event, context) => {
  const { element, index, items } = context;

  const firstItem = items[0];
  const lastItem = items[items.length - 1];
  const active = document.activeElement;

  if (typeof index !== 'number') return;

  if (event.shiftKey) {
    // Shift + Tab was pressed
    event.preventDefault();
    const prevItem = items[index - 1];
    setFlatFocusItem(prevItem, element);

    if (firstItem === active) lastItem.focus();
  } else {
    // Just Tab
    event.preventDefault();
    const nextTiem = items[index + 1];
    setFlatFocusItem(nextTiem, element);

    if (lastItem === active) firstItem.focus();
  }
};

export const onTab: PressOptions['onTab'] = (event, context) => {
  trapFocus(event, context);
};

//   if (
//     (id && !id.includes('root')) ||
//     (id && id.includes('root') && index !== 0)
//   ) {
//     event.preventDefault();
//   }
//   event.preventDefault();
