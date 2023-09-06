import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const user = await User.findById(id).select("login");
    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("User not found.", { status: 400 });
  }
}
