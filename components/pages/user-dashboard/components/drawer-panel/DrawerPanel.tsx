import Link from 'next/link';
import styles from './DrawerPanel.module.css';
import { Icon, List, ListItem } from '@/components';
import {
  faAd,
  faAdd,
  faEnvelope,
  faGear,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const DrawerPanel = () => {
  return (
    <div className={styles.panel}>
      <List className={styles.list}>
        <ListItem>
          <Link
            className={styles.listItem}
            data-link="menu-link"
            href="/"
            prefetch={true}
          >
            <Icon icon={faHome} />
            Home page
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className={styles.listItem}
            data-link="menu-link"
            href="/user/dashboard"
            prefetch={true}
          >
            <Icon icon={faGear} />
            Dashboard
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className={styles.listItem}
            data-link="menu-link"
            href="/user/adverts/new"
            prefetch={true}
          >
            <Icon icon={faAdd} />
            New Advert
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className={styles.listItem}
            data-link="menu-link"
            href="/user/adverts"
            prefetch={true}
          >
            <Icon icon={faAd} />
            My Adverts
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className={styles.listItem}
            data-link="menu-link"
            href="/user/profile"
            prefetch={true}
          >
            <Icon icon={faUser} />
            Profile
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className={styles.listItem}
            data-link="menu-link"
            href="/user/messages"
            prefetch={true}
          >
            <Icon icon={faEnvelope} />
            Messages
          </Link>
        </ListItem>
      </List>
    </div>
  );
};
