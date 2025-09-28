import { Loader } from '@/components';
import { SelectList } from '../select-list';
import { SelectScrollListProps } from './types';
import { useInfiniteScroll } from '@/hooks';

export const SelectScrollList = ({
  children,
  isLoading,
  onScrollEnd,
}: SelectScrollListProps) => {
  const element = useInfiniteScroll<HTMLDivElement>({ isLoading, onScrollEnd });

  return (
    <SelectList ref={element.localRef}>
      {isLoading && <Loader position="viewport" />}
      {children}
    </SelectList>
  );
};
