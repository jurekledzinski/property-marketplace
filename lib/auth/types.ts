export type SessionUser = {
  name: string;
  id: string;
  email?: string | null;
  image?: string | null;
  error?: string;
} | null;
