import { z } from 'zod';

export const AdvertSchema = z.object({
  advertiser: z.string(),
  email: z.email(),
  phone: z.string(),

  type: z.string(), // apartment | house
  status: z.string(), // rent | sale
  images: z.array(z.string()),

  country: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  postalCode: z.string(),
  price: z.number(),

  title: z.string(),
  description: z.string(),

  condition: z.string(),
  style: z.string(),
  year: z.number(),
  area: z.number(),
  rooms: z.number(),
  bathrooms: z.number(),
  amenities: z.array(z.string()),
});

export type Advert = z.infer<typeof AdvertSchema>;
