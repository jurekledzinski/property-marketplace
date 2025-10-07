import { auth } from '@/auth';

export default auth((request) => {
  const { pathname } = request.nextUrl;

  if (!request.auth && pathname.startsWith('/user')) {
    const newUrl = new URL('/', request.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
