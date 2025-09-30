import { ValidateFilesOptions } from '@/components';

export const validationOptions: ValidateFilesOptions = {
  allowTypes: ['image/jpeg', 'image/png'],
  maxAmount: 10,
  maxTotalSize: [6, 'MB'],
  maxSize: [500, 'KB'],
};
