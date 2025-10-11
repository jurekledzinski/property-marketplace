'use client';
import Link from 'next/link';
import styles from './Login.module.css';
import stylesCommon from './Common.module.css';
import { Box, Heading, Icon, LoginForm, useLoginForm } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getClassNamesBackground } from './utils';
import { login } from '@/actions';
import { useActionStateReset, useBackgroundImageLoaded } from '@/hooks';
import { useRouter } from 'next/navigation';

import {
  formatZodMessage,
  showErrorToast,
  showSuccessToast,
} from '@/utils-client';

const src = '/images/House-login.png';

export const Login = () => {
  const router = useRouter();
  const isLoaded = useBackgroundImageLoaded(src);
  const classBackground = getClassNamesBackground(isLoaded);

  const { formAction, isPending, state, resetStateAction } =
    useActionStateReset({
      fnAction: login,
      onResetAction: () => {
        if (state.success) {
          router.replace('/user/dashboard');
          router.refresh();
        } else {
          const result = formatZodMessage(state.message);
          showErrorToast(result);
        }
      },
    });

  const { formControl, onSubmit } = useLoginForm({
    isPending,
    isSuccess: state.success,
    onSubmitForm: formAction,
    onFailed: () => resetStateAction(),
    onSuccess: () => {
      showSuccessToast(state.message);
      resetStateAction();
    },
  });

  return (
    <Box className={stylesCommon.container}>
      <Box className={stylesCommon.wrapper}>
        <Box className={classBackground}></Box>
        <Box className={stylesCommon.right}>
          <Heading className={stylesCommon.title} level={4}>
            Sign in
          </Heading>
          <LoginForm
            controls={formControl}
            isPending={!state.message ? isPending : false}
            onSubmit={onSubmit}
          />

          <p className={styles.linkText}>
            Don&apos;t have an account?
            <Link
              className={styles.linkRegister}
              href="/auth/register"
              prefetch={true}
            >
              Sign up
            </Link>
          </p>

          <p className={styles.linkBack}>
            <Icon icon={faArrowLeft} />
            <Link href="/" prefetch={true}>
              Back to Home
            </Link>
          </p>
        </Box>
      </Box>
    </Box>
  );
};
