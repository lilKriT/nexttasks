import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

// Create a new user:
export async function POST(request: NextRequest) {
  await dbConnect();

  const { login, password } = await request.json();

  return NextResponse.json({ login, password });
}
