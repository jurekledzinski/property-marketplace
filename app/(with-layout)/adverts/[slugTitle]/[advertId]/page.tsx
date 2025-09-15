import { AdvertPageProps } from './types';
import { DetailsAdvert } from '@/components';
import { getAdvertPage } from '@/lib';
import { headers } from 'next/headers';

const DetailsAdvertPage = async ({ params }: AdvertPageProps) => {
  const { advertId } = await params;
  const headersData = await headers();
  const result = await getAdvertPage(headersData, advertId);

  return <DetailsAdvert advert={result} />;
};

export default DetailsAdvertPage;
