import { InputsAdvertsFilter } from '@/components';

interface Filters extends Partial<Omit<InputsAdvertsFilter, 'amenities'>> {
  amenities?: string;
  search?: string;
  sort?: string;
}

export type HomePageProps = { searchParams: Promise<Filters> };
