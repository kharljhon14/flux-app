import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const authenticatedAPIRoutes = [
    pathName.startsWith('/api/users'),
    pathName.startsWith('/api/posts'),
  ];

  if (authenticatedAPIRoutes.includes(true)) {
    const cookie = request.cookies.get('jwt-token');

    if (!cookie || !cookie?.value)
      return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

    try {
      const secret = new TextEncoder().encode('token-secret');

      await jwtVerify(cookie.value, secret);
    } catch (err) {
      console.error(err);

      return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
    }
  }
}

export const config = {
  matcher: '/:path*',
};
