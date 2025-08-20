import { DashboardAnalytics } from '@/models';
import { ThemeMode } from '@/store';

export type AdvertsStatusCardProps = {
  mode: ThemeMode;
  stats?: DashboardAnalytics['stats'];
};
