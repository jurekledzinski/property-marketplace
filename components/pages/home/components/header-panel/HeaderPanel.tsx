import styles from './HeaderPanel.module.css';
import { HeaderPanelProps } from './types';
import { memo } from 'react';
import { SearchBar, SortSelector } from './components';

export const HeaderPanel = memo(
  ({
    onClearQuerySearch,
    onSearchQuery,
    onSortQuery,
    searchValue,
    sortValue,
  }: HeaderPanelProps) => {
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
