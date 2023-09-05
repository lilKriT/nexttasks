import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const getUserID = async (authCookie: RequestCookie) => {
  const decoded = await jwtVerify(
    authCookie.value,
    new TextEncoder().encode(process.env.SECRET)
  );
  return decoded.payload.id;
};

const isLoggedIn = async (request: NextRequest) => {
  const token = request.cookies.get("auth");

  if (!token) {
    return false;
  }

  const id = await getUserID(token);
  // const user = await User.findById(id); // This will never work - edge DOESN"T SUPPORT MONGOOSE!

  return true;
};

export { isLoggedIn };
