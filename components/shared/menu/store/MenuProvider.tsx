import { MenuContext } from './MenuContext';
import { MenuProviderProps } from './types';
import { useMemo } from 'react';
import {
  useKeyPress,
  useArrowNavigation,
  useArrowNestedNavigation,
  useKeyMap,
  onDown,
  onUp,
  onEnter,
  onEscape,
  onSpace,
  onTab,
  onLeftNested,
  onRightNested,
} from '@/hooks';

const MenuProvider = ({ children, onSelectItem }: MenuProviderProps) => {
  const { mapKeys } = useKeyMap<string>();
  const { onKeyArrow } = useArrowNavigation({ onDown, onUp });
  const { onKeyPress } = useKeyPress({
    onSelectItem,
    onEnter,
    onEscape,
    onSpace,
    onTab,
  });
  const { onKeyArrowNested } = useArrowNestedNavigation({
    onLeftNested,
    onRightNested,
  });

  const values = useMemo(
    () => ({
      mapPlacements: mapKeys,
      onSelectItem,
      onKeyArrow,
      onKeyPress,
      onKeyArrowNested,
    }),
    [mapKeys, onKeyArrow, onKeyArrowNested, onKeyPress, onSelectItem]
  );

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
