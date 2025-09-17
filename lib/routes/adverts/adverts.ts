import 'server-only';
import { Advert } from '@/models';
import { Collection, Document } from 'mongodb';
import { DataDB } from '@/lib';
import { GetAdvertsSearchParams } from './types';

// --- GET ---

const projection = {
  advertiser: 0,
  amenities: 0,
  condition: 0,
  description: 0,
  email: 0,
  files: 0,
  images: 0,
  phone: 0,
  style: 0,
  type: 0,
  year: 0,
};

export const getAdverts = async (
  col: Collection<DataDB<Advert>>,
  searchParams: GetAdvertsSearchParams
) => {
  const {
    amenities,
    area,
    city,
    condition,
    country,
    page = '1',
    priceFrom,
    priceTo,
    rooms,
    search,
    sort,
    status,
    style,
    type,
    year,
  } = searchParams;

  const pageSize = 5;
  const sortStage = [];
  const skiptStage = [];
  const limitStage = [];
  const matchObject: Document = {};

  //   const matchStage: Document[] = [
  //     { $match: { $and: [{ $text: { $search: search || '' } }] } },
  //   ];

  if (priceFrom) {
    matchObject.price = { ...matchObject.price, $gte: Number(priceFrom) };
  }

  if (priceTo) {
    matchObject.price = { ...matchObject.price, $lte: Number(priceTo) };
  }

  if (amenities) {
    matchObject.amenities = { $in: amenities };
  }

  if (area) {
    matchObject.area = {
      $gte: Number(area) - 10 <= 0 ? Number(area) : Number(area) - 10,
      $lte: Number(area) + 10,
    };
  }

  if (city) {
    matchObject.city = city;
  }

  if (condition) {
    matchObject.condition = condition;
  }

  if (country) {
    matchObject.country = country;
  }

  if (rooms) {
    matchObject.rooms = Number(rooms);
  }

  if (status) {
    matchObject.status = status;
  }

  if (style) {
    matchObject.style = style;
  }

  if (type) {
    matchObject.type = type;
  }

  if (year) {
    matchObject.year = {
      $gte: Number(year) - 10 <= 0 ? Number(year) : Number(year) - 10,
      $lte: Number(year) + 10,
    };
  }

  if (sort) {
    sortStage[0] = { $sort: { createdAt: sort === 'ascending' ? 1 : -1 } };
  }

  if (page) {
    skiptStage[0] = { $skip: (Number(page) - 1) * pageSize };
    limitStage[0] = { $limit: pageSize };
  }

  const matchArray = Object.entries(matchObject).map(([key, value]) => ({
    [key]: value,
  }));

  const matchStage: Document[] = [
    {
      $match: {
        ...(matchArray.length ? { $and: [...matchArray] } : {}),
        $or: [
          { title: { $regex: search || '', $options: 'i' } },
          { description: { $regex: search || '', $options: 'i' } },
          { street: { $regex: search || '', $options: 'i' } },
        ],
      },
    },
  ];

  const adverts = await col
    .aggregate<{ data: DataDB<Advert>; totalItems: number }>([
      ...sortStage,
      ...matchStage,
      {
        $facet: {
          totalAmountAdverts: [{ $count: 'totalCount' }],
          data: [
            ...skiptStage,
            ...limitStage,
            {
              $addFields: {
                image: { $first: '$images' },
              },
            },
            {
              $project: {
                ...projection,
              },
            },
          ],
        },
      },
      {
        $project: {
          data: '$data',
          totalItems: {
            $ifNull: [
              { $arrayElemAt: ['$totalAmountAdverts.totalCount', 0] },
              0,
            ],
          },
        },
      },
    ])
    .toArray();

  const result = adverts[0] || { data: [], totalItems: 0 };

  return result;
};
