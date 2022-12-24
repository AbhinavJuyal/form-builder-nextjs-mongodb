import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@api-lib/connectDB";
import User from "@models/user";
import nc from "next-connect";
import { ncOpts } from "@api-lib/nc";

const handler = nc<NextApiRequest, NextApiResponse>(ncOpts);

export default handler.get(async (req, res) => {
  const { method } = req;
  console.log("server side", method);
  await connectDB();
  const users = await User.find();
  if (!users) throw new Error("No users found");
  res.status(200).json(users);
});
