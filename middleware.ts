import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    console.log("Going to about");
  }

  if (request.nextUrl.pathname.startsWith("/secrets")) {
    console.log("Going to secrets");
    return NextResponse.redirect(new URL("/about", request.url));
    // return NextResponse.rewrite(new URL("/about", request.url));
    // Rewrite still shows /secets path, redirect doesn't.
  }

  // console.log("Using middleware.");
  return NextResponse.next();
}
