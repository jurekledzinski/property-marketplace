import { MenuTriggerProps } from './types';
import { useMenuTrigger } from '../../hooks';

export const MenuTrigger = ({ children, id }: MenuTriggerProps) => {
  const menuChildren = useMenuTrigger({ children, id });

  return <>{menuChildren}</>;
};
