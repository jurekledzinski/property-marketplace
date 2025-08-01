import { Backdrop, Drawer } from '@/components';
import styles from './AdvertsLayout.module.css';
import Image from 'next/image';

export const AdvertsLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <header className={styles.header}></header>
        <section className={styles.section}>
          <div className={styles.box}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/06/21/19/04/farm-2428245_1280.jpg"
              alt="Beach"
              className={styles.image}
              width={858}
              height={400}
            />
          </div>
          <div className={styles.box}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/06/21/19/04/farm-2428245_1280.jpg"
              alt="Beach"
              className={styles.image}
              width={858}
              height={400}
            />
          </div>
          <div className={styles.box}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/06/21/19/04/farm-2428245_1280.jpg"
              alt="Beach"
              className={styles.image}
              width={858}
              height={400}
            />
          </div>
          <div className={styles.box}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/06/21/19/04/farm-2428245_1280.jpg"
              alt="Beach"
              className={styles.image}
              width={858}
              height={400}
            />
          </div>
        </section>
      </div>

      <Backdrop open={false} />
      <Drawer variant="pinned" direction="right">
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <fieldset
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <label>Country</label>
            <input type="text" />
          </fieldset>
          <fieldset
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <label>Country</label>
            <input type="text" />
          </fieldset>
          <fieldset
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <label>Country</label>
            <input type="text" />
          </fieldset>
        </div>
      </Drawer>
    </div>
  );
};
