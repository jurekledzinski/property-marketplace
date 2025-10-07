import { z } from 'zod';

export const MessageSchema = z.object({
  userId: z.string(),
  name: z.string(),
  email: z.email().refine((email) => email, {
    error: 'Email is required',
  }),
  title: z.string(),
  message: z.string(),
  createdAt: z.date().optional(),
});

export type Message = z.infer<typeof MessageSchema>;
