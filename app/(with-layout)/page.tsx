import { getAdvertsPage } from '@/lib';
import { headers } from 'next/headers';
import { Home, InputsAdvertsFilter } from '@/components';
import { HomePageProps } from './types';

const HomePage = async ({ searchParams }: HomePageProps) => {
  const { search, sort, ...filters } = await searchParams;
  const headersData = await headers();
  const adverts = await getAdvertsPage(headersData);

  const decodedFilters = Object.fromEntries(
    Object.entries(filters).map((item) =>
      item[0] === 'amenities'
        ? [item[0], decodeURIComponent(item[1]).split(',')]
        : [item[0], decodeURIComponent(item[1])]
    )
  ) as InputsAdvertsFilter;

  return (
    <Home
      advertCards={adverts || []}
      searchValue={search}
      sortValue={sort}
      filters={decodedFilters}
    />
  );
};

export default HomePage;
