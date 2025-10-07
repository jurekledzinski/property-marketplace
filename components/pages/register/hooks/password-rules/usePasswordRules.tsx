import { FieldValues, Validate } from 'react-hook-form';
import { UsePasswordRulesProps } from './types';
import { useValidateCheckList } from '@/components';

const mapRules: Record<string, Validate<string, FieldValues>> = {
  minLength: (v) => v.length >= 8 || '',
  hasNumber: (v) => /\d/.test(v) || '',
  hasUppercase: (v) => /[A-Z]/.test(v) || '',
  hasLowercase: (v) => /[a-z]/.test(v) || '',
  hasSpecial: (v) => /[@#!]/.test(v) || '',
  hasNoSpace: (v) => /^\S*$/.test(v) || '',
};

const confirmRules: Record<string, Validate<string, FieldValues>> = {
  sameValues: (_, rest) => rest.password === rest.confirm,
};

export const usePasswordRules = <T extends FieldValues>({
  nameConfirm,
  namePassword,
  watch,
}: UsePasswordRulesProps<T>) => {
  const { ruleResults: rulePassword, validate: validatePassword } =
    useValidateCheckList<T>({
      mapRules,
      value: watch(namePassword),
      formValues: watch(),
    });

  const { ruleResults: ruleConfirm, validate: validateConfirm } =
    useValidateCheckList<T>({
      mapRules: confirmRules,
      value: watch(nameConfirm),
      formValues: watch(),
    });

  return { ruleConfirm, validateConfirm, rulePassword, validatePassword };
};
