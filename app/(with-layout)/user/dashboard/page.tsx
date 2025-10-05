import { DashboardGrid } from '@/components';
import { getUserAnalyticsPage } from '@/services';
import { headers } from 'next/headers';

const UserDashboardPage = async () => {
  const headersData = await headers();
  const analytics = await getUserAnalyticsPage(headersData);

  return <DashboardGrid analytics={analytics} />;
};

export default UserDashboardPage;
