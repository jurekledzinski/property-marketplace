'use clien';
import styles from './AdvertsLayout.module.css';
import { AdvertsLayoutProps } from './types';

import {
  Backdrop,
  Drawer,
  FilterForm,
  FilterPanel,
  HeaderPanel,
  CardsSection,
  useFilterForm,
} from '@/components';

export const AdvertsLayout = ({
  searchValue,
  sortValue,
}: AdvertsLayoutProps) => {
  const { formControl, onSubmit, onResetAllFilters } = useFilterForm();

  console.log('Filters', formControl.watch());

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <HeaderPanel
          searchValue={decodeURIComponent(searchValue ?? '')}
          sortValue={decodeURIComponent(sortValue ?? '')}
        />
        <CardsSection />
      </div>
      <Backdrop open={false} />
      <Drawer variant="pinned" direction="right">
        <FilterPanel onResetAllFilters={onResetAllFilters}>
          <FilterForm controls={formControl} onSubmit={onSubmit} />
        </FilterPanel>
      </Drawer>
    </div>
  );
};
