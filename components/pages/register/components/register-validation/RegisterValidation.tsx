import { FieldValues } from 'react-hook-form';
import { RegisterValidationProps } from './types';
import { ValidationChecklist, ValidationItem } from '@/components';

export const RegisterValidation = <T extends FieldValues>({
  passwordRules,
}: RegisterValidationProps<T>) => {
  const { ruleConfirm, rulePassword } = passwordRules;

  return (
    <ValidationChecklist style={{ marginTop: 8 }}>
      <ValidationItem id="min" isValid={rulePassword['minLength']}>
        Password must be at least 8 characters
      </ValidationItem>
      <ValidationItem id="uppecase" isValid={rulePassword['hasUppercase']}>
        Must include at least one uppercase letter
      </ValidationItem>
      <ValidationItem id="lowercase" isValid={rulePassword['hasLowercase']}>
        Must include at least one lowercase letter
      </ValidationItem>
      <ValidationItem id="number" isValid={rulePassword['hasNumber']}>
        Must include at least one number
      </ValidationItem>
      <ValidationItem id="special" isValid={rulePassword['hasSpecial']}>
        Must include at least one special character: @#!
      </ValidationItem>
      <ValidationItem id="space" isValid={rulePassword['hasNoSpace']}>
        Must not contain spaces
      </ValidationItem>
      <ValidationItem id="sameValues" isValid={ruleConfirm['sameValues']}>
        Passwords do not match
      </ValidationItem>
    </ValidationChecklist>
  );
};
