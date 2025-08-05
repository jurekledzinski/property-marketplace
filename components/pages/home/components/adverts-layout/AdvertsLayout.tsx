import styles from './AdvertsLayout.module.css';
import { InputsAdvertsFilter, useFilterForm } from '@/components';
import { SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';
import {
  Backdrop,
  Drawer,
  FilterForm,
  FilterPanel,
  HeaderPanel,
  CardsSection,
} from '@/components';

export const AdvertsLayout = () => {
  const controls = useFilterForm();
  const onSubmit: SubmitHandler<InputsAdvertsFilter> = useCallback((data) => {
    console.log('Submit', data);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <HeaderPanel />
        <CardsSection />
      </div>
      <Backdrop open={false} />
      <Drawer variant="pinned" direction="right">
        <FilterPanel>
          <FilterForm controls={controls} onSubmit={onSubmit} />
        </FilterPanel>
      </Drawer>
    </div>
  );
};
