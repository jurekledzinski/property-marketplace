import { DashboardGrid } from '@/components';

const serverData = {
  topAdvert: 'Advert 1',
  total: { adverts: 12, messages: 3, rent: 3, sale: 1 },
  views: [
    { label: 'Modern house with 3 bedrooms', amount: 4 },
    { label: 'Cousy traditional apartment in center old town', amount: 2 },
    { label: 'Modern house in city', amount: 8 },
  ],
  stats: [
    { label: 'Published', amount: 4 },
    { label: 'InActive', amount: 8 },
  ],
};

const UserDashboardPage = () => {
  return <DashboardGrid dashboardAnalytics={serverData} />;
};

export default UserDashboardPage;
