import cookie from "cookie";

import User from "@models/user";
import connectDB from "@api-lib/connectDB";
import { route } from "@api-lib/nc";
import { generateJWT } from "@api-lib/generateToken";

const handler = route();

handler.post(async (req, res) => {
  const body = req.body;
  await connectDB();
  const user = await User.findOne({ email: body.email });
  if (!user) throw new Error("Account Not Found!");
  // @ts-ignore
  User.comparePassword(body.password, user.password, function (err, isMatch) {
    if (err) throw new Error(err.message);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }
    const jwtPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    const jwt = generateJWT(jwtPayload);
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("jwt", jwt, {
        httpOnly: true,
      })
    );
    res.status(200).json({ message: "Login Successful", token: jwt });
  });
});

export default handler;
