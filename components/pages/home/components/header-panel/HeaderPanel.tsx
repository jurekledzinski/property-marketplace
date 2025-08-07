import styles from './HeaderPanel.module.css';
import { HeaderPanelProps } from './types';
import { memo } from 'react';
import { SearchBar, SortSelector } from './components';
import { useSetQuries } from '@/hooks';

export const HeaderPanel = memo(
  ({ searchValue, sortValue }: HeaderPanelProps) => {
    const { onChange: onChangeSearch, onClear: onClearSearch } = useSetQuries();
    const { onChange: onChangeSort } = useSetQuries();

    return (
      <header className={styles.header}>
        <SearchBar
          searchValue={searchValue}
          onClickEndIcon={() => onClearSearch('search')}
          onChange={(e) => onChangeSearch(e, 'search')}
        />
        <SortSelector
          sortValue={sortValue}
          onChange={(e) => onChangeSort(e, 'sort')}
        />
      </header>
    );
  }
);

HeaderPanel.displayName = 'HeaderPanel';
