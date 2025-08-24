'use client';
import styles from './Register.module.css';
import stylesCommon from '@/components/pages/login/Common.module.css';
import { Box, Heading, RegisterForm } from '@/components';
import { classNames } from '@/helpers';
import { InputsRegister, usePasswordRules, useRegisterForm } from './hooks';
import { SubmitHandler } from 'react-hook-form';

export const RegisterPage = () => {
  const controls = useRegisterForm();
  const passwordRules = usePasswordRules({
    watch: controls.watch,
    nameConfirm: 'confirm',
    namePassword: 'password',
  });

  const onSubmit: SubmitHandler<InputsRegister> = (data) => {
    console.log('Submit', data);
  };

  return (
    <Box className={stylesCommon.container}>
      <Box className={stylesCommon.wrapper}>
        <Box
          className={classNames(stylesCommon.left, styles.leftBackground)}
        ></Box>
        <Box className={stylesCommon.right}>
          <Heading className={stylesCommon.title} level={4}>
            Sign up
          </Heading>
          <RegisterForm
            controls={controls}
            errors={controls.formState.errors}
            nameConfirm="confirm"
            nameEmail="email"
            nameName="name"
            namePassword="password"
            passwordRules={passwordRules}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
};
