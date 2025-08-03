import { getA11yIds } from './helpers';

export const useAriaAttributes = (id?: string) => {
  const getIds = () => {
    if (!id) throw new Error('ARIA attributes requiring ID need an "id"');
    return getA11yIds(id);
  };

  const menuA11y = () => ({
    role: 'menu',
  });

  const menuItemA11y = (disabled: boolean = false) => ({
    role: 'menuitem',
    'aria-disabled': disabled,
  });

  const menuPanelA11y = () => {
    const { triggerId, panelId } = getIds();

    return {
      'aria-labelledby': triggerId,
      id: panelId,
    };
  };

  const menuTriggerA11y = (open: boolean) => {
    const { triggerId, panelId } = getIds();

    return {
      'aria-controls': panelId,
      'aria-expanded': open,
      'aria-haspopup': 'menu' as const,
      id: triggerId,
    };
  };

  const selectTriggerA11y = (open: boolean, label: string = 'Select item') => ({
    'aria-controls': 'select-list',
    'aria-haspopup': 'listbox' as const,
    'aria-expanded': open,
    'aria-label': label,
    role: 'combobox',
  });

  const selectPanelA11y = () => ({
    role: 'presentation',
    id: 'select-panel',
  });

  const selectListA11y = () => ({
    role: 'listbox',
    id: 'select-list',
  });

  const selectOptionA11y = (id: string, selected: boolean) => ({
    'aria-selected': selected,
    role: 'option',
    id,
  });

  return {
    menuA11y,
    menuItemA11y,
    menuPanelA11y,
    menuTriggerA11y,
    selectTriggerA11y,
    selectPanelA11y,
    selectListA11y,
    selectOptionA11y,
  };
};
