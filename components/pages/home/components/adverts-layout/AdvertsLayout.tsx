import Image from 'next/image';
import styles from './AdvertsLayout.module.css';
import { Backdrop, Drawer, FilterForm, FilterPanel } from '@/components';
import { InputsAdvertsFilter, useFilterForm } from '../../hooks';
import { SubmitHandler } from 'react-hook-form';

export const AdvertsLayout = () => {
  const controls = useFilterForm();
  const onSubmit: SubmitHandler<InputsAdvertsFilter> = (data) => {
    console.log('Submit', data);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <input type="text" placeholder="Search" />
          <input type="text" placeholder="Sort" />
        </header>
        <section className={styles.section}>
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <div key={index} className={styles.box}>
                <Image
                  src="https://cdn.pixabay.com/photo/2017/06/21/19/04/farm-2428245_1280.jpg"
                  alt="Beach"
                  className={styles.image}
                  width={858}
                  height={400}
                />
              </div>
            );
          })}
        </section>
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
