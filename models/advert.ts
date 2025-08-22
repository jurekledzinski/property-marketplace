import { z } from 'zod';

export const AdvertSchema = z.object({
  advertiser: z.string(),
  email: z.email(),
  phone: z.string(),
  country: z.string(),
  state: z.string().optional(),
  city: z.string(),
  street: z.string(),
  postalCode: z.string(),
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  type: z.string(), // apartment | house
  status: z.string(), // rent | sale
  condition: z.string(),
  price: z.number(),
  year: z.number(),
  area: z.number(),
  rooms: z.number(),
  bathrooms: z.number(),

  style: z.string(),
  amenities: z.array(z.string()),
});

export type Advert = z.infer<typeof AdvertSchema>;
