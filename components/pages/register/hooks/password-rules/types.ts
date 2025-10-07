import { FieldValues, Path, UseFormWatch } from 'react-hook-form';

export type UsePasswordRulesProps<T extends FieldValues> = {
  nameConfirm: Path<T>;
  namePassword: Path<T>;
  watch: UseFormWatch<T>;
};
