import { EditAdvertPageProps } from './types';
import { formatCountires, getCountries, getUserAdvertPage } from '@/services';
import { formatNumberToStringObject } from '@/utils-client';
import { headers } from 'next/headers';
import { UserEditAdvert } from '@/components';

const EditAdvertPage = async ({ params }: EditAdvertPageProps) => {
  const headersData = await headers();
  const { advertId } = await params;

  const userAdvert = await getUserAdvertPage(headersData, advertId);
  const formattedUserAdvert = formatNumberToStringObject(userAdvert);

  const countriesData = await getCountries();
  const countries = formatCountires(countriesData);

  return <UserEditAdvert advert={formattedUserAdvert} countries={countries} />;
};

export default EditAdvertPage;
