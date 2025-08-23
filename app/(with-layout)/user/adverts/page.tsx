import { AdvertsUser, UserAdverts } from '@/components';

const stage = ['active', 'expired', 'expire soon'];

const adverts = Array.from<AdvertsUser>({ length: 50 }).map((_, index) => ({
  id: index.toString(),
  userId: '123',
  title: `Modern apartment in city center-${index}`,
  type: `Apartment-${index}`,
  stage: stage[Math.round(Math.random() * 2)],
  createdAt: Date.now() - Math.floor(Math.random() * 10000000000),
  actions: '',
}));

const UserAdvertsPage = () => {
  return <UserAdverts adverts={adverts ?? []} />;
};

export default UserAdvertsPage;
