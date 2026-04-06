import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-project-name", "zetrex-market");
  response.headers.set("x-admin-hidden-route", request.nextUrl.pathname.startsWith("/admin") ? "true" : "false");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
