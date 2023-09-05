import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const checkAuth = async (request: NextRequest) => {
  const authCookie = request.cookies.get("auth");

  if (authCookie) {
    console.log("There is a cookie: ", authCookie);
    // const decoded = jwt.verify(authCookie.value, process.env.SECRET as string);
    const decoded = await jwtVerify(
      authCookie.value,
      new TextEncoder().encode(process.env.SECRET)
    );
    console.log(decoded);
    return true;
  } else {
    console.log("There's NO cookie.");
    return false;
  }
};

export default checkAuth;
