import z from 'zod';

export const UserSchema = z.object({
  name: z
    .string({ error: 'Name is required' })
    .min(1, { message: 'Name is required' }),
  email: z
    .email()
    .refine((val) => val.trim() !== '', { message: 'Email is required' }),
  password: z
    .string({ error: 'Password is required' })
    .min(8, { message: 'Password required at least 8 characters' }),
});

export type User = z.infer<typeof UserSchema>;
