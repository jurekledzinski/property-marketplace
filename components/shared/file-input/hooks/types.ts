import { FileMimeType, MaxSize } from '@/types';
import { OnError } from '../types';

export type UseValidateFilesProps = {
  allowTypes: FileMimeType[];
  maxAmount?: number;
  maxSize?: MaxSize;
};

export type UseValidateFilesOnChangeProps = {
  onError?: OnError;
  allowTypes: FileMimeType[];
  maxAmount?: number;
  maxSize?: MaxSize;
};
