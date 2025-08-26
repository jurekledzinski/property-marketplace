'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { useDrawer, useTheme } from '@/store';

import {
  AppBar,
  ButtonGroup,
  Container,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuContainer,
  MenuItem,
  MenuPanel,
  MenuTrigger,
} from '@/components';
import {
  faBars,
  faFilter,
  faMoon,
  faSun,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const { mode, onChange } = useTheme();
  const { onToggleFiltersPanel, onToggleMenuPanel } = useDrawer();

  return (
    <AppBar className={styles.bar}>
      <Container m="m-center">
        <nav className={styles.nav}>
          <Heading level={4}>PlaceQuest</Heading>
          <ButtonGroup spacing="normal">
            <IconButton
              icon={[faEllipsisVertical]}
              variant="minimal"
              size="size-md"
              onClick={() => onToggleMenuPanel && onToggleMenuPanel()}
            />
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
            <MenuContainer>
              <MenuTrigger id="root">
                <Icon icon={faBars} />
              </MenuTrigger>
              <MenuPanel
                id="root"
                placement="bottom end"
                type="floating"
                arrowPlacement="top end"
                arrowColor="default"
                arrowSize="size-xs"
              >
                <Menu>
                  <MenuItem id="login">
                    <Link href="/auth/login">Login</Link>
                  </MenuItem>
                  <MenuItem id="register">
                    <Link href="/auth/register">Register</Link>
                  </MenuItem>
                  <MenuItem id="dashbord">
                    <Link href="/user/dashboard">Dashboard</Link>
                  </MenuItem>
                  <MenuItem id="logout">Logout</MenuItem>
                </Menu>
              </MenuPanel>
            </MenuContainer>
          </ButtonGroup>
        </nav>
      </Container>
    </AppBar>
  );
};
