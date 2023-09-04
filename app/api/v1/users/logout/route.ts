import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = NextResponse.json({ msg: "User logged out." });
  response.cookies.delete("auth");
  return response;
}
