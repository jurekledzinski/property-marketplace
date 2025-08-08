'use clien';
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
} from '@/components';

export const AdvertsLayout = ({
  searchValue,
  sortValue,
}: AdvertsLayoutProps) => {
  const controlQueries = useSetQuries();
  const { formControl, onSubmit, onResetAllFilters, reset } =
    useFilterForm(controlQueries);

  const empty = Object.values(formControl.watch()).some((item) => item.length);

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
