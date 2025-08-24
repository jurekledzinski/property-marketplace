import { FieldValues } from 'react-hook-form';
import { CheckListProps } from './types';
import { useMemo } from 'react';

export const useValidateCheckList = <T extends FieldValues>({
  mapRules,
  value,
  formValues,
}: CheckListProps<T>) => {
  const ruleResults = useMemo(() => {
    const validity: Record<string, boolean> = {};

    for (const key in mapRules) {
      const fn = mapRules[key as keyof typeof mapRules];
      if (fn(value, formValues)) validity[key] = true;
      else validity[key] = false;
    }

    return validity;
  }, [formValues, mapRules, value]);

  return { validate: mapRules, ruleResults };
};
