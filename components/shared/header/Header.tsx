'use client';
import styles from './Header.module.css';
import { useDrawer, useTheme } from '@/store';

import {
  AppBar,
  ButtonGroup,
  Container,
  Heading,
  IconButton,
} from '@/components';
import {
  faBars,
  faFilter,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const { mode, onChange } = useTheme();
  const { onToggleFiltersPanel } = useDrawer();

  return (
    <AppBar className={styles.bar}>
      <Container m="m-center">
        <nav className={styles.nav}>
          <Heading level={4}>PlaceQuest</Heading>
          <ButtonGroup spacing="normal">
            {mode === 'light' ? (
              <IconButton
                icon={[faMoon]}
                variant="minimal"
                size="size-md"
                onClick={() => onChange && onChange('dark')}
              />
            ) : (
              <IconButton
                icon={[faSun]}
                variant="minimal"
                size="size-md"
                onClick={() => onChange && onChange('light')}
              />
            )}
            <IconButton
              className={styles.iconFilter}
              icon={[faFilter]}
              variant="minimal"
              size="size-md"
              onClick={() => onToggleFiltersPanel && onToggleFiltersPanel()}
            />
            <IconButton icon={[faBars]} variant="minimal" size="size-md" />
          </ButtonGroup>
        </nav>
      </Container>
    </AppBar>
  );
};
