import { AdvertsUser, UserAdverts } from '@/components';
import { getAdverts } from '@/lib';

// const stage = ['active', 'expired', 'expire soon'];

// const adverts = Array.from<AdvertsUser>({ length: 50 }).map((_, index) => ({
//   id: index.toString(),
//   userId: '123',
//   title: `Modern apartment in city center-${index}`,
//   type: `Apartment-${index}`,
//   stage: stage[Math.round(Math.random() * 2)],
//   createdAt: Date.now() - Math.floor(Math.random() * 10000000000),
//   actions: '',
// }));

const UserAdvertsPage = async () => {
  const data = await getAdverts();

  return <UserAdverts adverts={data ? data : []} />;
};

export default UserAdvertsPage;
