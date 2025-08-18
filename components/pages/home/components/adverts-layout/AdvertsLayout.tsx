'use client';
import styles from './AdvertsLayout.module.css';
import { AdvertsLayoutProps } from './types';
import { useDrawer } from '@/store';
import { useSetQuries } from '@/hooks';

import {
  Backdrop,
  Box,
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
  advertCards,
  filters,
  searchValue,
  sortValue,
}: AdvertsLayoutProps) => {
  const { openFiltersPanel } = useDrawer();
  const controlQueries = useSetQuries();

  const form = useFilterForm({ ...controlQueries, filters });
  const utilsFilter = useAdvertsFilterUtils({ filters, form });

  return (
    <Box className={styles.layout}>
      <Box className={styles.wrapper}>
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
        <CardsSection advertCards={advertCards} />
      </Box>
      <Backdrop
        className={styles.backdropFilters}
        open={Boolean(openFiltersPanel)}
      />
      <Drawer
        direction="right"
        open={openFiltersPanel}
        variant="pinned"
        top={54}
      >
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
    </Box>
  );
};
