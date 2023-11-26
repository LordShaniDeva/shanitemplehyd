import { secrets } from './config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const auth = ['/admin/login'];

export function middleware(request: NextRequest) {
  /**
   * Default User Middleware
   */

  const adminID = request.cookies.get(secrets.ADMIN_TOKEN)?.value;
  if (auth.includes(request.nextUrl.pathname)) {
    if (adminID) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  } else {
    if (!adminID) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/admin/:path*', // matches /admin and /admin/anything-else
  ],
};
