import MenuProvider from './store/MenuProvider';
import PopOverProvider from '@/components/shared/pop-over/store';
import { MenuContainerProps } from './types';

export const MenuContainer = ({
  children,
  onSelectItem,
  size,
  ...props
}: MenuContainerProps) => {
  return (
    <PopOverProvider>
      <MenuProvider onSelectItem={onSelectItem} size={size}>
        <div data-container="menu-container" {...props}>
          {children}
        </div>
      </MenuProvider>
    </PopOverProvider>
  );
};
