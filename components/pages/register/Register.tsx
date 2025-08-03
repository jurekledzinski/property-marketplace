'use client';
import styles from './Register.module.css';
import { Box, Heading, RegisterForm } from '@/components';
import { SubmitHandler } from 'react-hook-form';
import { InputsRegister, useRegisterForm, usePasswordRules } from './hooks';

export const RegisterPage = () => {
  const controls = useRegisterForm();
  const passwordRules = usePasswordRules({ watch: controls.watch });
  const onSubmit: SubmitHandler<InputsRegister> = (data) => {
    console.log('Submit', data);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.wrapper}>
        <Box className={styles.left}></Box>
        <Box className={styles.right}>
          <Heading className={styles.title} level={4}>
            Sign up
          </Heading>
          <RegisterForm
            controls={controls}
            passwordRules={passwordRules}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
};
