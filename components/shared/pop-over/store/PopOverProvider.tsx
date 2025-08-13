import { PopOverContext } from './context';
import { PopOverProviderProps } from './types';
import { useClickOutside, useKeyMap } from '@/hooks';
import { useControlPopOver, useTriggerRefs } from '../hooks';
import { useMemo } from 'react';

const PopOverProvider = ({ children }: PopOverProviderProps) => {
  const { mapKeys: mapRefs } = useKeyMap<HTMLElement>();
  const registerTriggers = useTriggerRefs();
  const controlPopOver = useControlPopOver();

  useClickOutside({
    onClick: () => controlPopOver.onCloseAll(),
    onLoadRefs: () => [
      ...Object.entries(registerTriggers.triggers.current)
        .filter(([key]) => key.includes('root'))
        .map((i) => i[1]),
      ...Array.from(mapRefs.current.values()),
    ],
  });

  const values = useMemo(
    () => ({
      mapRefs,
      ...registerTriggers,
      ...controlPopOver,
    }),
    [controlPopOver, mapRefs, registerTriggers]
  );

  return (
    <PopOverContext.Provider value={values}>{children}</PopOverContext.Provider>
  );
};

export default PopOverProvider;
