import jwt from "jsonwebtoken";

export const generateJWT = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: "30d",
  });
};
