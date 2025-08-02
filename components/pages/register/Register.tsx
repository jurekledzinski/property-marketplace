import styles from './Register.module.css';
import { Heading } from '@/components';

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <Heading className={styles.title} level={4}>
            Sign up
          </Heading>
        </div>
      </div>
    </div>
  );
};
