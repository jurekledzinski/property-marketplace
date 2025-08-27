'use client';
import styles from './Login.module.css';
import stylesCommon from './Common.module.css';
import { Alert, Box, Heading, LoginForm, useLoginForm } from '@/components';
import { classNames, showSuccessToast } from '@/helpers';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { login } from '@/actions';
import { useActionStateReset } from '@/hooks';
import { useRouter } from 'next/navigation';

export const Login = () => {
  const router = useRouter();

  const { formAction, isPending, state } = useActionStateReset({
    fnAction: login,
    autoReset: true,
  });

  const { formControl, onSubmit } = useLoginForm({
    isPending,
    isSuccess: state.success,
    onSubmitForm: formAction,
    onSuccess: async () => {
      showSuccessToast(state.message);
      router.replace('/');
      router.refresh();
    },
  });

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
          <LoginForm controls={formControl} onSubmit={onSubmit} />
          {!state.success && state.message && (
            <Alert
              color="negative"
              icon={faTriangleExclamation}
              message={state.message}
              size="size-sm"
              fullWidth
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};
