import { getClassNamesMenuTrigger } from '../../components';
import { MenuTriggerControllerProps } from './types';
import { useAriaAttributes } from '@/hooks';
import { useCallback } from 'react';
import { usePopOver } from '@/components';

export const useMenuTriggerController = ({
  fullWidth,
  id,
}: MenuTriggerControllerProps) => {
  const className = getClassNamesMenuTrigger(fullWidth);

  const { open, onToggle, setTrigger } = usePopOver();

  const a11y = useAriaAttributes(id).menuTriggerA11y(Boolean(id && open[id]));

  const onClick = useCallback(() => {
    if (id) onToggle(id);
  }, [id, onToggle]);

  const ref = (node: HTMLButtonElement) => {
    if (id) setTrigger(id, node);
  };

  return { ...a11y, className, onClick, ref };
};
