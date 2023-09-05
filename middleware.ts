import { NextRequest, NextResponse } from "next/server";
import { isLoggedIn } from "./src/auth/authentication";

export async function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith("/about")) {
  //   console.log("Going to about");
  // }

  // TODO: check if user authenticated
  // if (request.nextUrl.pathname.startsWith("/secrets")) {
  //   console.log("Going to secrets");
  //   return NextResponse.redirect(new URL("/about", request.url));
  //   // return NextResponse.rewrite(new URL("/about", request.url));
  // }

  // Rewrite still shows /secets path, redirect doesn't.
  // Auth part
  if (await isLoggedIn(request)) {
    console.log("User is logged in.");
  } else {
    console.log("NOT logged in");
  }

  // console.log("Using middleware.");
  return NextResponse.next();
}
