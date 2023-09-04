import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import generateToken from "@/src/util/generateToken";

export async function POST(request: NextRequest) {
  const { login, password } = await request.json();

  const user = await User.findOne({ login });
  if (!user) {
    return NextResponse.json(
      { error: "User with this login doesn't exist." },
      { status: 400 }
    );
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    const response = NextResponse.json({ id: user._id, login: user.login });
    response.cookies.set({
      name: "auth",
      value: generateToken(user._id),
      httpOnly: true,
      path: "/",
    });

    return response;
  } else {
    return NextResponse.json({ error: "Invalid password." }, { status: 400 });
  }
}
