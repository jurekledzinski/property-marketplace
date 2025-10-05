import 'server-only';
import { DashboardAnalytics } from '@/models';
import { fetchApi, ReadonlyHeaders, serverEndpoints } from '@/services';
import { getDomain } from '@/utils-server';

export const getUserAnalyticsPage = async (headers?: ReadonlyHeaders) => {
  const domain = await getDomain();

  const response = await fetchApi<DashboardAnalytics>({
    tags: ['user-analytics'],
    url: serverEndpoints.userAnalytics(domain),
    headers,
  });

  if (!response.success || !response.payload) {
    return null;
  }

  return response.payload;
};
