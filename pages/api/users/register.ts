import connectDB from "@api-lib/connectDB";
import User from "@models/user";
import { route } from "@api-lib/nc";

const handler = route();

handler.post(async (req, res) => {
  const body = req.body;
  await connectDB();
  await User.create(body);
  res.status(201).json({ message: "User Created" });
});

export default handler;
