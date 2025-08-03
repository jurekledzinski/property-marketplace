import styles from './Login.module.css';
import stylesCommon from './Common.module.css';
import { classNames } from '@/helpers';
import { SubmitHandler } from 'react-hook-form';
import {
  Box,
  Heading,
  InputsLogin,
  LoginForm,
  useLoginForm,
} from '@/components';

export const LoginPage = () => {
  const controls = useLoginForm();

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    console.log('Submit', data);
  };

  return (
    <Box className={stylesCommon.container}>
      <Box className={stylesCommon.wrapper}>
        <Box
          className={classNames(styles.leftBackground, stylesCommon.left)}
        ></Box>
        <Box className={stylesCommon.right}>
          <Heading className={stylesCommon.title} level={4}>
            Sign in
          </Heading>
          <LoginForm controls={controls} onSubmit={onSubmit} />
        </Box>
      </Box>
    </Box>
  );
};
