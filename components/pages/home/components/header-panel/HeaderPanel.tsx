import styles from './HeaderPanel.module.css';
import { HeaderPanelProps } from './types';
import { memo } from 'react';
import { SearchBar, SortSelector } from './components';
import { useSetQuries } from '@/hooks';

export const HeaderPanel = memo(
  ({ searchValue, sortValue }: HeaderPanelProps) => {
    const { setQueryString: onSearchQuery, onClear: onClearQuerySearch } =
      useSetQuries();
    const { setQueryString: onSortQuery } = useSetQuries();

    return (
      <header className={styles.header}>
        <SearchBar
          searchValue={searchValue}
          onClickEndIcon={() => onClearQuerySearch('search')}
          onChange={(e) => onSearchQuery(e, 'search')}
        />
        <SortSelector
          sortValue={sortValue}
          onChange={(e) => onSortQuery(e, 'sort')}
        />
      </header>
    );
  }
);

HeaderPanel.displayName = 'HeaderPanel';
