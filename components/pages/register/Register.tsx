'use client';
import Link from 'next/link';
import styles from './Register.module.css';
import stylesCommon from '@/components/pages/login/Common.module.css';
import { Alert, Box, Heading, Icon, RegisterForm } from '@/components';
import { register } from '@/actions';
import { useActionStateReset } from '@/hooks';
import { usePasswordRules, useRegisterForm } from './hooks';
import { useRouter } from 'next/navigation';

import {
  classNames,
  formatZodMessage,
  showErrorToast,
  showSuccessToast,
} from '@/utils-client';

import {
  faArrowLeft,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

export const Register = () => {
  const router = useRouter();

  const { formAction, isPending, state, resetStateAction } =
    useActionStateReset({
      fnAction: register,
      onResetAction: () => {
        if (state.success) {
          showSuccessToast(state.message);
          router.push('/auth/login');
        } else {
          const result = formatZodMessage(state.message);
          showErrorToast(result);
        }
      },
    });

  const { formControl, onSubmit } = useRegisterForm({
    isPending,
    isSuccess: state.success,
    onSubmitForm: formAction,
    onFailed: () => resetStateAction(),
    onSuccess: () => resetStateAction(),
  });

  const passwordRules = usePasswordRules({
    watch: formControl.watch,
    nameConfirm: 'confirm',
    namePassword: 'password',
  });

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
            controls={formControl}
            errors={formControl.formState.errors}
            isPending={!state.message ? isPending : false}
            nameConfirm="confirm"
            nameEmail="email"
            nameName="name"
            namePassword="password"
            passwordRules={passwordRules}
            onSubmit={onSubmit}
          />

          <p className={styles.linkText}>
            Already have an account?
            <Link
              className={styles.linkLogin}
              href="/auth/login"
              prefetch={true}
            >
              Log in
            </Link>
          </p>

          <p className={styles.linkBack}>
            <Icon icon={faArrowLeft} />
            <Link href="/" prefetch={true}>
              Back to Home
            </Link>
          </p>

          {!state.success && state.message && (
            <Alert
              color="negative"
              icon={faTriangleExclamation}
              message={state.message}
              mt="mt-sm"
              size="size-xs"
              fullWidth
              variant="outlined"
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};
