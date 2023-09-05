import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Using middleware.");
  return NextResponse.next();
}
