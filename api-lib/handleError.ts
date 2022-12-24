import { NextApiResponse } from "next";

export const handleError = (
  res: NextApiResponse,
  message: string,
  status: number
) => {
  res.status(status).json({ message });
};
