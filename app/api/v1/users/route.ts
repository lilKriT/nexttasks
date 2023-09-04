import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";

import User from "@/models/User";
import generateToken from "@/src/util/generateToken";

// TODO: a lot of error checking
// Create a new user:
export async function POST(request: NextRequest) {
  await dbConnect();

  const { login, password } = await request.json();

  if (!login || !password) {
    return NextResponse.json(
      { error: "Information incomplete." },
      { status: 400 }
    );
  }

  const userExists = await User.findOne({ login });
  if (userExists) {
    return NextResponse.json({ error: "Login taken." }, { status: 400 });
  }

  // Password:
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    login,
    password: hashedPassword,
  });

  if (user) {
    const response = NextResponse.json({
      id: user._id,
      login: user.login,
    });
    response.cookies.set({
      name: "auth",
      value: generateToken(user._id),
      httpOnly: true,
      path: "/",
    });

    return response;
  } else {
    return NextResponse.json(
      { error: "User couldn't be created." },
      { status: 400 }
    );
  }
}
