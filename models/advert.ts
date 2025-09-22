import { z } from 'zod';

const image = z.object({
  fileId: z.string(),
  name: z.string(),
  url: z.string(),
});

export const AdvertSchema = z.object({
  advertiser: z.string(),
  userId: z.string(),
  email: z.email(),
  phone: z.string(),
  country: z.string(),
  state: z.string().optional(),
  city: z.string(),
  street: z.string(),
  postalCode: z.string(),
  title: z.string(),
  description: z.string(),
  files: z.array(z.instanceof(File)).optional(),
  images: z.array(image),
  deleteImages: z.array(image).optional(),
  type: z.string(), // apartment | house
  status: z.string(), // rent | sale
  condition: z.string(),
  price: z.coerce.number(),
  year: z.coerce.number(),
  area: z.coerce.number(),
  rooms: z.coerce.number(),
  bathrooms: z.coerce.number(),
  style: z.string(),
  amenities: z.array(z.string()),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  views: z.number(),
});

export type Advert = z.infer<typeof AdvertSchema>;
