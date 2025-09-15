import 'server-only';
import { Advert } from '@/models';
import { Collection } from 'mongodb';
import { DataDB } from '@/lib';

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

export const getAdverts = async (col: Collection<DataDB<Advert>>) => {
  const adverts = await col
    .aggregate<DataDB<Advert>>([
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
    ])
    .toArray();
  return adverts;
};
