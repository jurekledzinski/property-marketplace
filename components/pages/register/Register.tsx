'use client';
import styles from './Register.module.css';
import { Box, Heading, RegisterForm } from '@/components';
import { useControlRegisterForm, usePasswordRules } from './hooks';

export const RegisterPage = () => {
  const controls = useControlRegisterForm();
  const passwordRules = usePasswordRules({ watch: controls.watch });

  return (
    <Box className={styles.container}>
      <Box className={styles.wrapper}>
        <Box className={styles.left}></Box>
        <Box className={styles.right}>
          <Heading className={styles.title} level={4}>
            Sign up
          </Heading>
          <RegisterForm controls={controls} passwordRules={passwordRules} />
        </Box>
      </Box>
    </Box>
  );
};
