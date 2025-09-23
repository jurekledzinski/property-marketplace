import 'server-only';
import { Advert, DashboardAnalytics, Message } from '@/models';
import { Collection } from 'mongodb';
import { DataDB } from '@/lib';
import { GetUserAnalyticsContext } from './types';

// --- GET ---

export const getUserAnalytics = async (
  ctx: GetUserAnalyticsContext,
  colAdverts: Collection<DataDB<Advert>>,
  colMessages: Collection<DataDB<Message>>
) => {
  const { userId } = ctx;
  const totalMessages = await colMessages.countDocuments({ userId });
  const maxDays = 7 * 24 * 60 * 60 * 1000;
  const minDays = 5 * 24 * 60 * 60 * 1000;

  const result = await colAdverts
    .aggregate<DataDB<DashboardAnalytics>>([
      {
        $facet: {
          topAdvert: [
            { $match: { userId } },
            { $sort: { views: -1 } },
            { $limit: 1 },
            { $project: { topViewAdvert: '$title' } },
          ],
          totalAdverts: [{ $match: { userId } }, { $count: 'totalCount' }],
          totalRent: [
            { $match: { status: 'rent', userId } },
            { $count: 'rentCount' },
          ],
          totalSale: [
            { $match: { status: 'sale', userId } },
            { $count: 'saleCount' },
          ],
          views: [
            { $match: { userId } },
            { $project: { label: '$title', amount: '$views' } },
          ],
          statusActive: [
            {
              $match: {
                updatedAt: { $gte: new Date(Date.now() - minDays) },
                userId,
              },
            },
            { $count: 'totalActive' },
          ],
          statusInActive: [
            {
              $match: {
                updatedAt: {
                  $lt: new Date(Date.now() - maxDays),
                },
                userId,
              },
            },
            { $count: 'totalInActive' },
          ],
          statusSoonExpire: [
            {
              $match: {
                updatedAt: {
                  $gte: new Date(Date.now() - maxDays),
                  $lt: new Date(Date.now() - minDays),
                },
                userId,
              },
            },
            { $count: 'totalSoonExpire' },
          ],
        },
      },
      {
        $project: {
          topAdvert: { $arrayElemAt: ['$topAdvert.topViewAdvert', 0] },
          total: {
            adverts: { $arrayElemAt: ['$totalAdverts.totalCount', 0] },
            rent: { $arrayElemAt: ['$totalRent.rentCount', 0] },
            sale: { $arrayElemAt: ['$totalSale.saleCount', 0] },
          },
          views: '$views',
          stats: [
            {
              label: 'Active',
              amount: { $arrayElemAt: ['$statusActive.totalActive', 0] },
            },
            {
              label: 'Inactive',
              amount: { $arrayElemAt: ['$statusInActive.totalInActive', 0] },
            },
            {
              label: 'Soon expire',
              amount: {
                $arrayElemAt: ['$statusSoonExpire.totalSoonExpire', 0],
              },
            },
          ],
        },
      },
    ])
    .toArray();

  const analitycs = {
    ...result[0],
    total: { ...result[0].total, messages: totalMessages },
  };

  return analitycs;
};
