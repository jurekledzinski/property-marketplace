import { DashboardAnalytics } from '@/models';
import { ThemeMode } from '@/store';

export type ViewAdvertsCardProps = {
  mode: ThemeMode;
  views?: DashboardAnalytics['views'];
  label?: string;
  title?: string;
};
