import { FileMimeType } from '@/types';
import { formatFileSize } from '@/utils-client';
import { UseValidateFilesProps } from './types';

export const useValidateFiles = ({
  allowTypes,
  maxAmount,
  maxSize,
  maxTotalSize,
}: UseValidateFilesProps) => {
  const checkFileType = (
    files: File[],
    onGetMessage: (file: File) => string = (file) =>
      `Unsupported file type: ${file.name} (${file.type})`
  ) => {
    for (const file of files) {
      if (!allowTypes.includes(file.type as FileMimeType)) {
        return onGetMessage(file);
      }
    }

    return true;
  };

  const checkMaxSize = (
    files: File[],
    onGetMessage: (file: File, size: string) => string = (file, size) =>
      `The file "${file.name}" exceeds the maximum allowed size of ${size}.`
  ) => {
    if (!maxSize || maxSize.length < 2) return true;

    for (const file of files) {
      const formattedSize = formatFileSize(file.size, maxSize[1]);

      if (parseFloat(formattedSize) > maxSize[0]) {
        const size = maxSize.join('');
        return onGetMessage(file, size);
      }
    }

    return true;
  };

  const checkMaxTotalSize = (
    files: File[],
    onGetMessage: (file: File, size: string) => string = (file, size) =>
      `Total size exceeds the maximum allowed size of ${size}.`
  ) => {
    if (!maxTotalSize || maxTotalSize.length < 2) return true;

    let totalFilesSize = 0;

    for (const file of files) {
      const formattedSize = formatFileSize(file.size, maxTotalSize[1]);

      totalFilesSize += parseFloat(formattedSize);

      if (totalFilesSize > maxTotalSize[0]) {
        const size = maxTotalSize.join('');
        return onGetMessage(file, size);
      }
    }

    return true;
  };

  const checkMaxAmountFiles = (
    files: File[],
    onGetMessage: (amount: number, maxAmount: number) => string = (
      amount,
      maxAmount
    ) =>
      `You selected ${amount} files, but the maximum amount allowed is ${maxAmount}.`
  ) => {
    if (!maxAmount) return true;
    if (files.length > maxAmount) return onGetMessage(files.length, maxAmount);
    return true;
  };

  const checkRequiredFiles = (
    files: File[],
    onGetMessage: () => string = () => 'File is required'
  ) => {
    if (!files || files.length === 0) {
      return onGetMessage();
    }

    return true;
  };

  return {
    checkFileType,
    checkMaxSize,
    checkMaxAmountFiles,
    checkRequiredFiles,
    checkMaxTotalSize,
  };
};
