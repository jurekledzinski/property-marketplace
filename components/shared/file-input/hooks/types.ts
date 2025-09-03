import { FileMimeType, MaxSize } from '@/types';
import { OnError } from '../types';

export type ValidateFilesOptions = {
  allowTypes: FileMimeType[];
  maxAmount?: number;
  maxSize?: MaxSize;
  maxTotalSize?: MaxSize;
};

export type UseValidateFilesProps = ValidateFilesOptions;

export interface UseValidateFilesOnChangeProps extends ValidateFilesOptions {
  onError?: OnError;
}
