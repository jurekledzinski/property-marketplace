import styles from './CardsSection.module.css';
import { memo } from 'react';

import { CardAdvert } from './components';

const data = [
  {
    area: 100,
    bathrooms: 1,
    city: 'Szczecin',
    country: 'Poland',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Modern  big and nice house',
    typeAdvert: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg',
  },
  {
    area: 100,
    bathrooms: 1,
    city: 'Szczecin',
    country: 'Poland',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Tiny house',
    typeAdvert: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2017/05/28/18/48/ivy-2351778_1280.jpg',
  },
  {
    area: 100,
    bathrooms: 1,
    city: 'Szczecin',
    country: 'Poland',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Tiny house',
    typeAdvert: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg',
  },
  {
    area: 100,
    bathrooms: 1,
    city: 'Szczecin',
    country: 'Poland',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Tiny house',
    typeAdvert: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2017/06/21/16/33/farm-2427751_1280.jpg',
  },
  {
    area: 100,
    bathrooms: 1,
    city: 'Szczecin',
    country: 'Poland',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Tiny house',
    typeAdvert: 'Sale',
    src: 'https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg',
  },
];

export const CardsSection = memo(() => {
  return (
    <section className={styles.section}>
      {data.map((advert, index) => (
        <CardAdvert key={index} dataAdvert={advert} />
      ))}
    </section>
  );
});

CardsSection.displayName = 'CardsSection';
