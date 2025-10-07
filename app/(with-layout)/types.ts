import { InputsAdvertsFilter } from '@/components';

type Filters = Partial<Omit<InputsAdvertsFilter, 'amenities'>>;
type Pagination = { page?: string; pageSize?: string };

export interface AdvertsSearchParams extends Filters, Pagination {
  amenities?: string;
  search?: string;
  sort?: string;
}

export type HomePageProps = {
  searchParams: Promise<AdvertsSearchParams>;
};
