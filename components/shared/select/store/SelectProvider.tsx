import { SelectContext } from './contextSelect';
import { SelectProviderProps } from './types';
import { useMemo } from 'react';
import {
  useArrowNavigation,
  useKeyPress,
  onDown,
  onUp,
  onEnter,
  onEscape,
  onTab,
} from '@/hooks';

export const SelectProvider = ({ children, ...props }: SelectProviderProps) => {
  const { onKeyArrow } = useArrowNavigation({ onDown, onUp });
  const { onKeyPress } = useKeyPress({
    onSelectItem: (id) => props.value.onChange && props.value.onChange(id),
    onEnter,
    onEscape,
    onTab,
  });

  const values = useMemo(
    () => ({
      onKeyArrow,
      onKeyPress,
      ...props.value,
    }),
    [onKeyArrow, onKeyPress, props.value]
  );

  return (
    <SelectContext.Provider value={values}>{children}</SelectContext.Provider>
  );
};
