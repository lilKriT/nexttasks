import { NextRequest, NextResponse } from "next/server";

const checkAuth = (request: NextRequest) => {
  const authCookie = request.cookies.get("auth");

  if (authCookie) {
    console.log("There is a cookie.");
    return true;
  } else {
    console.log("There's NO cookie.");
    return false;
  }
};

export default checkAuth;
