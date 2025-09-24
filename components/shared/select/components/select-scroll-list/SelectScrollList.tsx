import { SelectList } from '../select-list';
import { SelectScrollListProps } from './types';
import { useInfiniteScroll } from '@/hooks';

export const SelectScrollList = ({
  children,
  isLoading,
  onScrollEnd,
}: SelectScrollListProps) => {
  const { localRef } = useInfiniteScroll<HTMLDivElement>({
    isLoading,
    onScrollEnd,
  });

  return <SelectList ref={localRef}>{children}</SelectList>;
};
