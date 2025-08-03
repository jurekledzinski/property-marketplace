import styles from './Login.module.css';
import stylesCommon from './Common.module.css';
import { Box, Heading, LoginForm } from '@/components';
import { classNames } from '@/helpers';

export const LoginPage = () => {
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
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};
