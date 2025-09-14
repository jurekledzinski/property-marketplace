import { z } from 'zod';

export const MessageSchema = z.object({
  userId: z.string(),
  sender: z
    .object({ name: z.string(), email: z.email() })
    .refine((sender) => sender.name && sender.email, {
      error: 'Sender must have a valid name and email',
    }),
  title: z.string(),
  description: z.string(),
  createdAt: z.date(),
});

export type Message = z.infer<typeof MessageSchema>;
