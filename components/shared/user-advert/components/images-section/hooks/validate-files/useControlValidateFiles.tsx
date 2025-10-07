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
  otherKey,
}: useControlValidateFilesProps<T>): RegisterOptions<T, K>['validate'] => {
  const validate: RegisterOptions<T, K>['validate'] = useCallback(
    (files: FieldPathValue<T, K>, formData: FieldValues) => {
      const otherField = formData[otherKey ?? ''];
      const type = checkFiles.checkFileType(files);
      const maxAmount = checkFiles.checkMaxAmountFiles(files);
      const maxSize = checkFiles.checkMaxSize(files);
      const required = checkFiles.checkRequiredFiles(files);
      const totalMaxSize = checkFiles.checkMaxTotalSize(files);

      if (type !== true) return type;
      if (maxAmount !== true) return maxAmount;
      if (maxSize !== true) return maxSize;
      if (required !== true) return otherField.length ? true : required;
      if (totalMaxSize !== true) return totalMaxSize;

      return true;
    },
    [checkFiles, otherKey]
  );

  return validate;
};
