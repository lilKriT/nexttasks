import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const getUserIDfromString = async (authString: string) => {
  const decoded = await jwtVerify(
    authString,
    new TextEncoder().encode(process.env.SECRET)
  );
  return decoded.payload.id;
};
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Zjc3NzlmNmQ5ZDliODIyNDBiNTE3MCIsImV4cCI6MTY5Mzk2NzY2MywiaWF0IjoxNjkzOTY0MDYzLCJuYmYiOjE2OTM5NjQwNjN9.yeS7uHVo1R_KUUapas6N0gi3UiRDZmjg3yPtQx4diHk
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

export { isLoggedIn, getUserID, getUserIDfromString };
