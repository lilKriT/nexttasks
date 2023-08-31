import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ msg: "Fetching all the tasks." });
}
