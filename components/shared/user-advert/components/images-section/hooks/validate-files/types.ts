import { useValidateFiles } from '@/components';
import { FieldValues, Path } from 'react-hook-form';

export type useControlValidateFilesProps<T extends FieldValues> = {
  checkFiles: ReturnType<typeof useValidateFiles>;
  otherKey?: Path<T>;
};
