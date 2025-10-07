'use server';
import { cookies } from 'next/headers';

// Necessary in server action when use fetch api and need auth cookie session in routes
// cookies must be added then to headers fetch
export const formatCookiesString = async () => {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();

  const cookiesString = allCookies
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join('; ');

  return cookiesString;
};
