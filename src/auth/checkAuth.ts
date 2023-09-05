import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const checkAuth = (request: NextRequest) => {
  const authCookie = request.cookies.get("auth");

  if (authCookie) {
    console.log("There is a cookie: ", authCookie);
    // const decoded = jwt.verify(authCookie.value, process.env.SECRET as string);
    // console.log(decoded);
    return true;
  } else {
    console.log("There's NO cookie.");
    return false;
  }
};

export default checkAuth;
