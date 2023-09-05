import { NextRequest, NextResponse } from "next/server";
import { isLoggedIn } from "./src/auth/authentication";

export async function middleware(request: NextRequest) {
  // Is logged in?
  const isLogged = await isLoggedIn(request);
  // console.log("Logged in: ", isLogged);
  if (isLogged) {
    if (
      request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!isLogged) {
    if (request.nextUrl.pathname.startsWith("/profile")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
