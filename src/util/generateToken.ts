// import jwt from "jsonwebtoken";
import { SignJWT } from "jose";

const generateToken = (id: string) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60;

  return new SignJWT({ id })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.SECRET));
  // return jwt.sign({ id }, process.env.SECRET as string, { expiresIn: "3d" });
};

export default generateToken;
