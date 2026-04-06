import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE = "zetrex_admin";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (!pathname.startsWith("/admin") || pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const authenticated = request.cookies.get(ADMIN_COOKIE)?.value === "authenticated";
  if (!authenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
