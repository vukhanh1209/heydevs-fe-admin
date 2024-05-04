import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PATH } from "./const/path.const";
import { AUTH_STATUS, TOKEN, UNAUTHORIZED } from "./const/auth.constant";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN);

  if (token && request.nextUrl.pathname === PATH.SIGN_IN.get()) {
    return NextResponse.redirect(new URL(PATH.JOBS.get(), request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith(PATH.ADMIN)) {
    const response = NextResponse.redirect(
      new URL(PATH.SIGN_IN.get(), request.url)
    );
    response.cookies.set(AUTH_STATUS, UNAUTHORIZED);
    return response;
  }
  return NextResponse.next();
}
