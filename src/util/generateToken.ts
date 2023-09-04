import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET as string, { expiresIn: "3d" });
};

export default generateToken;
