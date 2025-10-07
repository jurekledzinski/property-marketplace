import { useSetQuries } from '@/hooks';

type SetQueryString = ReturnType<typeof useSetQuries>['setQueryString'];

export type HeaderPanelProps = {
  searchValue?: string;
  sortValue?: string;
  onClearQuerySearch: ReturnType<typeof useSetQuries>['onClear'];
  onSearchQuery: SetQueryString;
  onSortQuery: SetQueryString;
};
