import { InputsRegisterForm } from '../control-register-form';
import { UsePasswordRulesProps } from './types';
import { useValidateCheckList } from '@/components';
import { Validate } from 'react-hook-form';

const mapRules: Record<string, Validate<string, InputsRegisterForm>> = {
  minLength: (v) => v.length >= 8 || '',
  hasNumber: (v) => /\d/.test(v) || '',
  hasUppercase: (v) => /[A-Z]/.test(v) || '',
  hasLowercase: (v) => /[a-z]/.test(v) || '',
  hasSpecial: (v) => /[@#!]/.test(v) || '',
  hasNoSpace: (v) => /^\S*$/.test(v) || '',
};

const confirmRules: Record<string, Validate<string, InputsRegisterForm>> = {
  sameValues: (_, rest) => rest.password === rest.confirm,
};

export const usePasswordRules = ({ watch }: UsePasswordRulesProps) => {
  const { ruleResults: rulePassword, validate: validatePassword } =
    useValidateCheckList({
      mapRules,
      value: watch('password'),
      formValues: watch(),
    });

  const { ruleResults: ruleConfirm, validate: validateConfirm } =
    useValidateCheckList({
      mapRules: confirmRules,
      value: watch('confirm'),
      formValues: watch(),
    });

  return { ruleConfirm, validateConfirm, rulePassword, validatePassword };
};
