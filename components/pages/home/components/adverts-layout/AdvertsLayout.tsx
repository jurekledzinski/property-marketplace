'use clien';
import styles from './AdvertsLayout.module.css';
import { AdvertsLayoutProps } from './types';
import { MouseEvent, useCallback } from 'react';
import { useSetQuries } from '@/hooks';

import {
  Backdrop,
  Drawer,
  FilterForm,
  FilterPanel,
  HeaderPanel,
  CardsSection,
  useFilterForm,
  FiltersChipsPanel,
  InputsAdvertsFilter,
} from '@/components';

export const AdvertsLayout = ({
  filters,
  searchValue,
  sortValue,
}: AdvertsLayoutProps) => {
  const controlQueries = useSetQuries();
  const { formControl, onSubmit, onResetFilter, onResetAllFilters, reset } =
    useFilterForm({
      ...controlQueries,
      filters,
    });

  const empty = Object.values(formControl.watch()).some((item) => item?.length);
  const isFiltersEmpty = Object.values(filters).some((item) => item?.length);

  console.log('Watch', formControl.watch());

  const onDelete = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget as HTMLButtonElement;
      const name = target.name as keyof InputsAdvertsFilter;
      const value = target.id;
      onResetFilter(name, value);
    },
    [onResetFilter]
  );

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <HeaderPanel
          searchValue={decodeURIComponent(searchValue ?? '')}
          sortValue={decodeURIComponent(sortValue ?? '')}
        />
        {isFiltersEmpty && (
          <FiltersChipsPanel filters={filters} onDelete={onDelete} />
        )}
        <CardsSection />
      </div>
      <Backdrop open={false} />
      <Drawer variant="pinned" direction="right">
        <FilterPanel isFormEmpty={empty} onResetAllFilters={onResetAllFilters}>
          <FilterForm
            controls={formControl}
            onSubmit={onSubmit}
            reset={reset}
          />
        </FilterPanel>
      </Drawer>
    </div>
  );
};
