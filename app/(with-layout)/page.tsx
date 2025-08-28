import { Home, InputsAdvertsFilter } from '@/components';
import { HomePageProps } from './types';

const dataAdvertCards = [
  {
    area: 100,
    userId: '1',
    bathrooms: 1,
    city: 'Sittard',
    country: 'Netherlands',
    state: 'Limburg',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Modern 3-Bedroom Home with Open-Concept Living',
    status: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg',
  },
  {
    area: 100,
    userId: '1',
    bathrooms: 1,
    city: 'Sittard',
    country: 'Netherlands',
    state: 'Limburg',
    postalCode: '50-490',
    price: 1200000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Contemporary Family Home with Garden & Garage',
    status: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2017/05/28/18/48/ivy-2351778_1280.jpg',
  },
  {
    area: 100,
    userId: '1',
    bathrooms: 1,
    city: 'Sittard',
    country: 'Netherlands',
    state: 'Limburg',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Stylish Modern House for Sale in Prime Location',
    status: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg',
  },
  {
    area: 100,
    userId: '1',
    bathrooms: 1,
    city: 'Sittard',
    country: 'Netherlands',
    state: 'Limburg',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Architect-Designed Modern Home with Stunning Interiors',
    status: 'Sale',
    src: 'https://cdn.pixabay.com/photo/2017/06/21/16/33/farm-2427751_1280.jpg',
  },
  {
    area: 100,
    userId: '1',
    bathrooms: 1,
    city: 'Sittard',
    country: 'Netherlands',
    state: 'Limburg',
    postalCode: '50-490',
    price: 120000,
    rooms: 3,
    street: 'Akwarela 5',
    title: 'Tiny house',
    status: 'Sale',
    src: 'https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg',
  },
];

const HomePage = async ({ searchParams }: HomePageProps) => {
  const { search, sort, ...filters } = await searchParams;

  const decodedFilters = Object.fromEntries(
    Object.entries(filters).map((item) =>
      item[0] === 'amenities'
        ? [item[0], decodeURIComponent(item[1]).split(',')]
        : [item[0], decodeURIComponent(item[1])]
    )
  ) as InputsAdvertsFilter;

  return (
    <Home
      advertCards={dataAdvertCards}
      searchValue={search}
      sortValue={sort}
      filters={decodedFilters}
    />
  );
};

export default HomePage;
