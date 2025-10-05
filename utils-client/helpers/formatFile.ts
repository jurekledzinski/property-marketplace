import { MaxSize } from '@/types';

export const formatFileSize = (size: number, unit: MaxSize[1]) => {
  if (unit === 'KB') return (size / 1024).toFixed(2);
  if (unit === 'MB') return (size / 1024 ** 2).toFixed(2);
  if (unit === 'GB') return (size / 1024 ** 3).toFixed(2);
  return size.toString();
};
