import { usePasswordRules } from '../../hooks';

export type RegisterValidationProps = {
  passwordRules: ReturnType<typeof usePasswordRules>;
};
