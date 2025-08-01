import styles from './Header.module.css';
import { AppBar, ButtonGroup, Container, Heading, Icon } from '@/components';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <AppBar className={styles.bar}>
      <Container margin="m-center">
        <nav className={styles.nav}>
          <Heading level={4}>PlaceQuest</Heading>
          <ButtonGroup spacing="normal">
            <Icon icon={faBars} />
          </ButtonGroup>
        </nav>
      </Container>
    </AppBar>
  );
};
