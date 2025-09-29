import { formatCountires, getCountries } from '@/lib';
import { UserNewAdvert } from '@/components';

const NewAdvertPage = async () => {
  const countriesData = await getCountries();
  const countries = formatCountires(countriesData);

  return <UserNewAdvert countries={countries} />;
};

export default NewAdvertPage;
