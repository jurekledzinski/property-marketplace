import { z } from 'zod';

export const DraftFileSchema = z.object({
  advertId: z.string().optional(),
  userId: z.string(),
  mode: z.union([z.literal('edit'), z.literal('new')]),
  images: z
    .array(
      z.object({
        fileId: z.string(),
        name: z.string(),
        url: z.string(),
        isOriginal: z.boolean().optional(),
      })
    )
    .optional(),
  deleteImages: z
    .array(
      z.object({
        fileId: z.string(),
        name: z.string(),
        url: z.string(),
        isOriginal: z.boolean().optional(),
      })
    )
    .optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  status: z.literal('failed').optional(),
});

export type DraftFile = z.infer<typeof DraftFileSchema>;
