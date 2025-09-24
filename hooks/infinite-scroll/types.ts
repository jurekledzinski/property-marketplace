import { RefObject } from 'react';

export type UseInfiniteScrollProps<T> = {
  isLoading?: boolean;
  onScrollEnd?: () => void;
  ref?: RefObject<T | null>;
};
