'use client';
import Link from 'next/link';
import styles from './Register.module.css';
import stylesCommon from '@/components/pages/login/Common.module.css';
import { Alert, Box, Heading, RegisterForm } from '@/components';
import { classNames, showSuccessToast } from '@/helpers';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { initialState } from '@/constants';
import { register } from '@/actions';
import { useActionState } from 'react';
import { usePasswordRules, useRegisterForm } from './hooks';
import { useRouter } from 'next/navigation';

export const Register = () => {
  const router = useRouter();

  const [state, action, isPending] = useActionState(register, initialState);

  const { formControl, onSubmit } = useRegisterForm({
    isPending,
    isSuccess: state.success,
    onSubmitForm: action,
    onSuccess: () => {
      showSuccessToast(state.message);
      router.push('/auth/login');
    },
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
