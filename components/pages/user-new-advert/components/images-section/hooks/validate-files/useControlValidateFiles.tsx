import { useCallback } from 'react';
import { useControlValidateFilesProps } from './types';
import {
  FieldPathValue,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

export const useControlValidateFiles = <
  T extends FieldValues,
  K extends Path<T>
>({
  checkFiles,
}: useControlValidateFilesProps): RegisterOptions<T, K>['validate'] => {
  const validate: RegisterOptions<T, K>['validate'] = useCallback(
    (files: FieldPathValue<T, K>) => {
      const type = checkFiles.checkFileType(files);
      const maxAmount = checkFiles.checkMaxAmountFiles(files);
      const maxSize = checkFiles.checkMaxSize(files);
      const required = checkFiles.checkRequiredFiles(files);

      if (type !== true) return type;
      if (maxAmount !== true) return maxAmount;
      if (maxSize !== true) return maxSize;
      if (required !== true) return required;

      return true;
    },
    [checkFiles]
  );

  return validate;
};
