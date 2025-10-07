'use client';
import { PopOverContext } from './context';
import { PopOverProviderProps } from './types';
import { useClickOutside, useKeyMap } from '@/hooks';
import { useControlPopOver, useTriggerRefs } from '../hooks';
import { useCallback, useMemo } from 'react';

const PopOverProvider = ({ children }: PopOverProviderProps) => {
  const mapRefs = useKeyMap<HTMLElement>();
  const registerTriggers = useTriggerRefs();
  const controlPopOver = useControlPopOver();

  useClickOutside({
    onClick: useCallback(() => controlPopOver.onCloseAll(), [controlPopOver]),
    onLoadRefs: useCallback(
      () => [
        ...Object.entries(registerTriggers.triggers.current)
          .filter(([key]) => key.includes('root'))
          .map((i) => i[1]),
        ...Array.from(mapRefs.mapKeys.current.values()),
      ],
      [mapRefs.mapKeys, registerTriggers.triggers]
    ),
  });

  const values = useMemo(
    () => ({
      ...mapRefs,
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
