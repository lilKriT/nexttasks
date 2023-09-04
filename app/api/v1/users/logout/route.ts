import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  request.cookies.clear(); // TODO: make sure this only deletes some cookies, like auth
  return NextResponse.json({ msg: "User logged out." });
}
