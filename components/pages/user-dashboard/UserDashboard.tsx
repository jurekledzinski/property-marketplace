import { Container } from '@/components';
import styles from './UserDashboard.module.css';

export const UserDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Container m="m-center" maxWidth="mw-md">
        UserDashboard component
      </Container>
    </div>
  );
};
