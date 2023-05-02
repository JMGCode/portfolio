import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";
const lyricsFinder = require("lyrics-finder");

type Data = {
  lyrics: string;
};

const cors = Cors({
  origin: "https://music-player.jmgcode.com",
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const { artist, title } = req.query;
    console.log(artist, title);
    const lyrics = (await lyricsFinder(artist, title)) || "No Lyrics Found";
    res.json({ lyrics });
  }
  return res.status(400);
};

export default handler;
