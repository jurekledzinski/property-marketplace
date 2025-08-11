'use client';
import styles from './AdvertsLayout.module.css';
import { AdvertsLayoutProps } from './types';
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
  useAdvertsFilterUtils,
} from '@/components';

export const AdvertsLayout = ({
  filters,
  searchValue,
  sortValue,
}: AdvertsLayoutProps) => {
  const controlQueries = useSetQuries();

  const form = useFilterForm({ ...controlQueries, filters });
  const utilsFilter = useAdvertsFilterUtils({ filters, form });

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <HeaderPanel
          searchValue={decodeURIComponent(searchValue ?? '')}
          sortValue={decodeURIComponent(sortValue ?? '')}
          onClearQuerySearch={controlQueries.onClear}
          onSearchQuery={controlQueries.setQueryString}
          onSortQuery={controlQueries.setQueryString}
        />
        {utilsFilter.areFiltersEmpty && (
          <FiltersChipsPanel
            filters={filters}
            onDelete={utilsFilter.onDelete}
          />
        )}
        <CardsSection />
      </div>
      <Backdrop open={false} />
      <Drawer variant="pinned" direction="right">
        <FilterPanel
          isFormEmpty={utilsFilter.isFormFilled}
          onResetAllFilters={form.onResetAllFilters}
        >
          <FilterForm
            controls={form.formControl}
            onSubmit={form.onSubmit}
            reset={form.reset}
          />
        </FilterPanel>
      </Drawer>
    </div>
  );
};
