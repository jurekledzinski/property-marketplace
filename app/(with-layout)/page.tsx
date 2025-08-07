import { HomePage } from '@/components';

type HomePageProps = {
  searchParams: Promise<{ search?: string; sort?: string }>;
};

const Home = async ({ searchParams }: HomePageProps) => {
  const filters = await searchParams;
  return <HomePage searchValue={filters?.search} sortValue={filters?.sort} />;
};

export default Home;
