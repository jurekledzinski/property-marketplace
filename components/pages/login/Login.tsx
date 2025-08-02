import styles from './Login.module.css';
import { Heading } from '@/components';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <Heading className={styles.title} level={4}>
            Sign in
          </Heading>
        </div>
      </div>
    </div>
  );
};
