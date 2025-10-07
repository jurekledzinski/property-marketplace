export const getA11yIds = (baseId: string) => ({
  triggerId: `${baseId}-trigger`,
  panelId: `${baseId}-panel`,
  listId: `${baseId}-list`,
  labelId: `${baseId}-label`,
  tabId: (index: number) => `${baseId}-tab-${index}`,
  tabPanelId: (index: number) => `${baseId}-tabpanel-${index}`,
});
