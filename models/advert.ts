import { z } from 'zod';

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
  images: z.array(z.string()),
  deleteImagesIds: z.array(z.string()).optional(),
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
  createdAt: z.string().optional(),
});

export type Advert = z.infer<typeof AdvertSchema>;

//images = files
//dbImages = images
