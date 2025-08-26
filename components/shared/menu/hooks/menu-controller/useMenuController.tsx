import { MouseEvent } from 'react';
import { useAriaAttributes } from '@/hooks';
import { useMenu } from '../../store';
import { usePopOver } from '@/components';

export const useMenuController = () => {
  const { onSelectItem } = useMenu();
  const { onCloseAll } = usePopOver();
  const a11y = useAriaAttributes().menuA11y();

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const menuItemElement = (e.target as HTMLElement).closest('[data-id]');

    if (!menuItemElement) return;

    const id = menuItemElement.getAttribute('data-id');
    const type = menuItemElement.getAttribute('data-type');

    if (id && onSelectItem && type !== 'trigger' && type) {
      onSelectItem(id);
      onCloseAll();
    }
  };

  return { ...a11y, onClick };
};
