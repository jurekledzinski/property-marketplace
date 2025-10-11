import { decodeQueryUrl } from '@/utils-server';
import { formatCountires, getAdvertsPage, getCountries } from '@/services';
import { headers } from 'next/headers';
import { Home, InputsAdvertsFilter } from '@/components';
import { HomePageProps } from './types';

const HomePage = async ({ searchParams }: HomePageProps) => {
  const data = await searchParams;
  const queries = new URLSearchParams(Object.fromEntries(Object.entries(data)));
  const { page, search, sort, ...filters } = await searchParams;

  const headersData = await headers();
  const adverts = await getAdvertsPage(queries, headersData);

  const decodedFilters = decodeQueryUrl<object>(filters, ['amenities']);

  const countriesData = await getCountries();
  const countries = formatCountires(countriesData);

  return (
    <Home
      advertCards={adverts?.data || []}
      countries={countries}
      filters={decodedFilters as InputsAdvertsFilter}
      page={Number(page) || 1}
      pageSize={5}
      queryParams={queries.toString()}
      searchValue={decodeURIComponent(search ?? '')}
      sortValue={decodeURIComponent(sort ?? '')}
      totalItems={adverts?.totalItems || 0}
    />
  );
};

export default HomePage;
