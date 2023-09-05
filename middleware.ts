import { NextRequest, NextResponse } from "next/server";
import checkAuth from "./src/auth/checkAuth";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    console.log("Going to about");
  }

  // TODO: check if user authenticated
  if (request.nextUrl.pathname.startsWith("/secrets")) {
    console.log("Going to secrets");
    return NextResponse.redirect(new URL("/about", request.url));
    // return NextResponse.rewrite(new URL("/about", request.url));
    // Rewrite still shows /secets path, redirect doesn't.
  }

  // Auth part
  if (await checkAuth(request)) {
    console.log("Just did auth check");
  }

  // console.log("Using middleware.");
  return NextResponse.next();
}
