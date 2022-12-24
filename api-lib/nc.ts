import nc, { Options } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import morgan from "morgan";

export const ncOpts: Options<NextApiRequest, NextApiResponse> = {
  onError(err, req, res) {
    console.error(err);
    res.statusCode =
      err.status && err.status >= 100 && err.status < 600 ? err.status : 500;
    res.json({ message: err.message });
  },
};

export const route = (options?: Options<NextApiRequest, NextApiResponse>) => {
  return nc({ ...ncOpts, ...options }).use(morgan("dev"));
};
