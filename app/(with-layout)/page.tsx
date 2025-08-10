import { HomePage, InputsAdvertsFilter } from '@/components';
import { HomePageProps } from './types';

const Home = async ({ searchParams }: HomePageProps) => {
  const { search, sort, ...filters } = await searchParams;

  const decodedFilters = Object.fromEntries(
    Object.entries(filters).map((item) =>
      item[0] === 'amenities'
        ? [item[0], decodeURIComponent(item[1]).split(',')]
        : [item[0], decodeURIComponent(item[1])]
    )
  ) as InputsAdvertsFilter;

  return (
    <HomePage searchValue={search} sortValue={sort} filters={decodedFilters} />
  );
};

export default Home;
