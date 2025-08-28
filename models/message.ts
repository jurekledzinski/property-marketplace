import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  sender: z.object({ name: z.string(), email: z.email() }),
  title: z.string(),
  description: z.string(),
  createdAt: z.iso.datetime(),
});

export type Message = z.infer<typeof MessageSchema>;
