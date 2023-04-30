import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";

const SpotifyWebApi = require("spotify-web-api-node");

type Data = {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
};

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
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
  // await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi(credentials);

    spotifyApi
      .authorizationCodeGrant(code)
      .then((data: any) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((error: any) => {
        console.log(error);
        return res.status(400);
      });
  }
  return res.status(400);
};

export default handler;
