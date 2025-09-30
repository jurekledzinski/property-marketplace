'use client';
import styles from './AdvertsLayout.module.css';
import { AdvertsLayoutProps } from './types';
import { useDrawer } from '@/store';
import { useFetchCities, useFetchStates, useSetQuries } from '@/hooks';

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
  HomeAdvertsPagination,
  ButtonGroup,
} from '@/components';

export const AdvertsLayout = ({
  advertCards,
  countries,
  filters,
  page,
  pageSize,
  searchValue,
  sortValue,
  totalItems,
}: AdvertsLayoutProps) => {
  const { openFiltersPanel, onCloseFilterPanel } = useDrawer();
  const controlQueries = useSetQuries();

  const form = useFilterForm({ ...controlQueries, filters });
  const utilsFilter = useAdvertsFilterUtils({ filters, form });
  const controlFetchCities = useFetchCities();
  const controlFetchStates = useFetchStates();

  return (
    <Box className={styles.layout}>
      <Box className={styles.wrapper}>
        <HeaderPanel
          searchValue={searchValue}
          sortValue={sortValue}
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
        {advertCards.length ? (
          <ButtonGroup
            fullWidth={true}
            justify="justify-end"
            mt="mt-md"
            mb="mb-sm"
          >
            <HomeAdvertsPagination
              amountData={totalItems}
              currentPage={page}
              itemsPerPage={pageSize}
              onChangePage={(page) => {
                controlQueries.setQueryString(page.toString(), 'page');
              }}
            />
          </ButtonGroup>
        ) : null}
      </Box>
      <Backdrop
        className={styles.backdropFilters}
        open={Boolean(openFiltersPanel)}
        zIndex={48}
        onClick={onCloseFilterPanel}
      />
      <Drawer
        direction="right"
        open={openFiltersPanel}
        variant="pinned"
        top={54}
        zIndex={49}
      >
        <FilterPanel
          isFormEmpty={utilsFilter.isFormFilled}
          onResetAllFilters={form.onResetAllFilters}
        >
          <FilterForm
            cities={controlFetchCities.dataList}
            controls={form.formControl}
            countries={countries}
            getCities={controlFetchCities.fetchData}
            getStates={controlFetchStates.fetchData}
            isLoadingCities={controlFetchCities.isFetching}
            isLoadingStates={controlFetchStates.isFetching}
            isSuccessStates={controlFetchStates.isSuccess}
            isSuccessCities={controlFetchCities.isSuccess}
            onSubmit={form.onSubmit}
            states={controlFetchStates.dataList}
            onScrollEndCities={controlFetchCities.onScrollEnd}
            onScrollEndStates={controlFetchStates.onScrollEnd}
          />
        </FilterPanel>
      </Drawer>
    </Box>
  );
};
