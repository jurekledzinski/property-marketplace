import styles from './Login.module.css';
import { Box, Heading, LoginForm } from '@/components';

export const LoginPage = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.wrapper}>
        <Box className={styles.left}></Box>
        <Box className={styles.right}>
          <Heading className={styles.title} level={4}>
            Sign in
          </Heading>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};
