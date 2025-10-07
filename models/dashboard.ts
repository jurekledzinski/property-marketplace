import { z } from 'zod';

export const DashboardAnalyticsSchema = z.object({
  topAdvert: z.string(),
  total: z.object({
    adverts: z.number(),
    messages: z.number(),
    rent: z.number(),
    sale: z.number(),
  }),
  stats: z.array(z.object({ label: z.string(), amount: z.number() })),
  views: z.array(z.object({ label: z.string(), amount: z.number() })),
});

export type DashboardAnalytics = z.infer<typeof DashboardAnalyticsSchema>;
