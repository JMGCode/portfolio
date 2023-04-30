import type { NextApiRequest, NextApiResponse } from "next";
const lyricsFinder = require("lyrics-finder");

type Data = {
  lyrics: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    const { artist, title } = req.query;
    console.log(artist, title);
    const lyrics = (await lyricsFinder(artist, title)) || "No Lyrics Found";
    res.json({ lyrics });
  }
  return res.status(400);
};

export default handler;
