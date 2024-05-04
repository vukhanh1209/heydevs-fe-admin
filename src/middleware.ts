import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PATH } from "./const/path.const";
import { AUTH_STATUS, TOKEN, UNAUTHORIZED } from "./const/auth.constant";

export function middleware(request: NextRequest) {
  const isHasToken = request.cookies.get(TOKEN);

  if (!isHasToken && request.nextUrl.pathname.startsWith(PATH.ADMIN)) {
    const response = NextResponse.redirect(
      new URL(PATH.SIGN_IN.get(), request.url)
    );
    response.cookies.set(AUTH_STATUS, UNAUTHORIZED);
    return response;
  }
  return NextResponse.next();
}
