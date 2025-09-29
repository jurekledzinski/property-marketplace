import styles from '../../Header.module.css';
import { IconButton } from '@/components';
import { NavigationButtonsProps } from './types';
import { usePathname } from 'next/navigation';
import {
  faFilter,
  faMoon,
  faSun,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

export const NavigationButtons = ({
  mode,
  onChangeTheme,
  onToggleFilters,
  onToggleMenu,
}: NavigationButtonsProps) => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isUser = pathname.includes('/user');

  return (
    <>
      {isUser && (
        <IconButton
          icon={[faEllipsisVertical]}
          variant="minimal"
          size="size-md"
          onClick={onToggleMenu}
        />
      )}
      {mode === 'light' ? (
        <IconButton
          icon={[faMoon]}
          variant="minimal"
          size="size-xs"
          onClick={() => onChangeTheme('dark')}
        />
      ) : (
        <IconButton
          id="light"
          icon={[faSun]}
          variant="minimal"
          size="size-xs"
          onClick={() => onChangeTheme('light')}
        />
      )}
      {isHome && (
        <IconButton
          className={styles.iconFilter}
          icon={[faFilter]}
          variant="minimal"
          size="size-md"
          onClick={onToggleFilters}
        />
      )}
    </>
  );
};
